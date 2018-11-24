// Define Constants
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
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

// Fetch all posts
app.get('/exhibitor', (req, res) => {
  Exhibitor.find({}, 'saleNum tagNum firstName lastName species fairWeight clubName picture', function (error, exhibitor) {
    if (error) { console.error(error); }
    res.send({
      exhibitor: exhibitor
    })
  }).sort({_id:-1})
})

// Add new exhibitor
app.post('/exhibitor', (req, res) => {
  var db = req.db;
  var firstName = req.body.firstName;
  var lastName = req.body.lastName;
  var saleNum = req.body.saleNum;
  var tagNum = req.body.tagNum;
  var species = req.body.species;
  var fairWeight = req.body.fairWeight;
  var clubName = req.body.clubName;
  var picture = req.body.picture;

  var new_exhibitor = new Exhibitor({
    firstName: firstName,
    lastName: lastName,
    saleNum : saleNum,
	  tagNum : tagNum,
	  species : species,
	  fairWeight : fairWeight,
	  clubName : clubName,
	  picture : picture
  })

  new_exhibitor.save(function (error) {
    if (error) {
      console.log(error)
    }
    res.send({
      success: true,
      message: 'Exhibitor saved successfully!'
    })
  })
})

// Fetch single post
app.get('/exhibitor/:id', (req, res) => {
  var db = req.db;
  Exhibitor.findById(req.params.id, 'saleNum tagNum firstName lastName species fairWeight clubName picture', function (error, exhibitor) {
    if (error) { console.error(error); }
    res.send(exhibitor)
  })
})

// Update a post
app.put('/exhibitor/:id', (req, res) => {
  var db = req.db;
  Post.findById(req.params.id, 'saleNum tagNum firstName lastName species fairWeight clubName picture', function (error, exhibitor) {
    if (error) { console.error(error); }

    exhibitor.firstName = req.body.firstName;
    exhibitor.lastName = req.body.lastName;
    exhibitor.saleNum= req.body.saleNum;
    exhibitor.tagNum = req.body.tagNum;
    exhibitor.species = req.body.species;
    exhibitor.fairWeight = req.body.fairWeight;
    exhibitor.clubName = req.body.clubName;
    exhibitor.picture = req.body.picture;
    exhibitor.save(function (error) {
      if (error) {
        console.log(error)
      }
      res.send({
        success: true
      })
    })
  })
})

// Delete an exhibitor
app.delete('/exhibitor/:id', (req, res) => {
  var db = req.db;
  Exhibitor.remove({
    _id: req.params.id
  }, function(err, exhibitor){
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
