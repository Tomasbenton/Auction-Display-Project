// Define Constants
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
var Post = require("../models/post");
const exhibitorRoutes = require('../exproutes/exhibitor.route');
const buyerRoutes = require('../exproutes/buyer.route');
const userRoutes = require('../exproutes/user.route');

// Express.js
const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())
app.use('/exhibitor', exhibitorRoutes);
app.use('/buyer', buyerRoutes);
app.use('/user', userRoutes);

// Mongodb / Mongoose
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/auctiondb');
// mongoose.connect('mongodb://192.168.21.105:27017/auctiondb');
var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", function(callback){
  console.log("Database connection Succeeded");
});

// Create User Collection
db.createCollection("User", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["username", "password"],
      properties: {
        username: {
          bsonType: "string",
          description: "must be a string and is required"
        },
        password: {
          bsonType: "string",
          description: "must be a string and is required"
        }
      }
    }
  }
})
// Create Exhibitor Collection
db.createCollection("Exhibitor", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["entrySaleNumber", "fullName", "tag", "checkInWeight", "className", "departmentName", "clubName", "showClassName", "pictureName"],
      properties: {
        entrySaleNumber: {
          bsonType: "number",
          description: "must be a number and is required"
        },
        fullName: {
          bsonType: "string",
          description: "must be a string and is required"
        },
        tag: {
          bsonType: "string",
          description: "must be a string and is required"
        },
        animalDescription: {
          bsonType: "string",
          description: "must be a string and is not required"
        },
        checkInWeight: {
          bsonType: "number",
          description: "must be a number and is required"
        },
        className: {
          bsonType: "string",
          description: "must be a string and is required"
        },
        departmentName: {
          bsonType: "string",
          description: "must be a string and is required"
        },
        clubName: {
          bsonType: "string",
          description: "must be a string and is required"
        },
        showClassName: {
          bsonType: "string",
          description: "must be a string and is required"
        },
        pictureName: {
          bsonType: "string",
          description: "must be a string and is required"
        }
      }
    }
  }
})
// Create Buyer Collection
db.createCollection("Buyer", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["entrySaleNumber", "name", "identifier", "pictureName"],
      properties: {
        entrySaleNumber: {
          bsonType: "number",
          description: "must be a number and is required"
        },
        name: {
          bsonType: "string",
          description: "must be a string and is required"
        },
        identifier: {
          bsonType: "number",
          description: "must be a number and is required"
        },
        contactName: {
          bsonType: "string",
          description: "must be a string and is not required"
        },
        email: {
          bsonType: "string",
          description: "must be a string and is not required"
        },
        phone: {
          bsonType: "string",
          description: "must be a string and is not required"
        },
        address1: {
          bsonType: "string",
          description: "must be a string and is not required"
        },
        address2: {
          bsonType: "string",
          description: "must be a string and is not required"
        },
        cityStatePostalCode: {
          bsonType: "string",
          description: "must be a string and is not required"
        },
        pictureName: {
          bsonType: "string",
          description: "must be a string and is required"
        }
      }
    }
  }
})

// Fetch all posts
app.get('/posts', (req, res) => {
  Post.find({}, 'saleNum tagNum firstName lastName species fairWeight clubName', function (error, posts) {
    if (error) { console.error(error); }
    res.send({
      posts: posts
    })
  }).sort({_id:-1})
})

// Add new post
app.post('/posts', (req, res) => {
  var db = req.db;
  var firstName = req.body.firstName;
  var lastName = req.body.lastName;
  var saleNum = req.body.saleNum;
  var tagNum = req.body.tagNum;
  var species = req.body.species;
  var fairWeight = req.body.fairWeight;
  var clubName = req.body.clubName;
  //var picture = req.body.picture;

  var new_post = new Post({
    firstName: firstName,
    lastName: lastName,
    saleNum : saleNum,
	  tagNum : tagNum,
	  species : species,
	  fairWeight : fairWeight,
	  clubName : clubName
	  //,picture : picture
  })

  new_post.save(function (error) {
    if (error) {
      console.log(error)
    }
    res.send({
      success: true,
      message: 'Post saved successfully!'
    })
  })
})

// Fetch single post
app.get('/post/:id', (req, res) => {
  var db = req.db;
  Post.findById(req.params.id, 'saleNum tagNum firstName lastName species fairWeight clubName', function (error, post) {
    if (error) { console.error(error); }
    res.send(post)
  })
})

// Update a post
app.put('/posts/:id', (req, res) => {
  var db = req.db;
  Post.findById(req.params.id, 'saleNum tagNum firstName lastName species fairWeight clubName', function (error, post) {
    if (error) { console.error(error); }

    post.firstName = req.body.firstName;
    post.lastName = req.body.lastName;
    post.saleNum= req.body.saleNum;
    post.tagNum = req.body.tagNum;
    post.species = req.body.species;
    post.fairWeight = req.body.fairWeight;
    post.clubName = req.body.clubName;
    //post.picture = req.body.picture;
    post.save(function (error) {
      if (error) {
        console.log(error)
      }
      res.send({
        success: true
      })
    })
  })
})

// Delete a post
app.delete('/posts/:id', (req, res) => {
  var db = req.db;
  Post.remove({
    _id: req.params.id
  }, function(err, post){
    if (err)
      res.send(err)
    res.send({
      success: true
    })
  })
})

// Node API endpoint
var port = process.env.PORT || 8081
app.listen(port, function(){
  console.log('Node.js is listening on port', port);
});
