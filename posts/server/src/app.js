// Define Constants
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const exhibitorRoutes = require('../exproutes/exhibitor.route');
const buyerRoutes = require('../exproutes/buyer.route');

// Express.js
const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())
app.use('/exhibitor', exhibitorRoutes);
app.use('/buyer', buyerRoutes);

// Mongodb / Mongoose
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/auctiondb');
var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", function(callback){
  console.log("Database connection Succeeded");
});

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

// // Add new post
// app.post('/posts', (req, res) => {
//   var db = req.db;
//   var title = req.body.title;
//   var description = req.body.description;
//   var new_post = new Post({
//     title: title,
//     description: description
//   })

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

//     post.title = req.body.title
//     post.description = req.body.description
//     post.save(function (error) {
//       if (error) {
//         console.log(error)
//       }
//       res.send({
//         success: true
//       })
//     })
//   })
// })

// Node API endpoint
var port = process.env.PORT || 8081
app.listen(port, function(){
  console.log('Node.js is listening on port', port);
});
