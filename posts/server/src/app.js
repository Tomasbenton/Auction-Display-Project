const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
var Post = require("../models/post");

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())


var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/posts');
var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", function(callback){
  console.log("Connection Succeeded");
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

// Update an post
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

app.listen(process.env.PORT || 8081)
