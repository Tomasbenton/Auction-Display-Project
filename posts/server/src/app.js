// Define Constants
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const exhibitorRoutes = require('../exproutes/exhibitor.route');
const buyerRoutes = require('../exproutes/buyer.route');
// var Post = require("../models/post");

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

// Node API endpoint
var port = process.env.PORT || 8081
app.listen(port, function(){
  console.log('Node.js is listening on port', port);
});





/* OLD STUFF FROM POSTS TUTORIAL*/
// // Fetch all posts
// app.get('/posts', (req, res) => {
//   Post.find({}, 'title description', function (error, posts) {
//     if (error) { console.error(error); }
//     res.send({
//       posts: posts
//     })
//   }).sort({_id:-1})
// })

// // Add new post
// app.post('/posts', (req, res) => {
//   var db = req.db;
//   var title = req.body.title;
//   var description = req.body.description;
//   var new_post = new Post({
//     title: title,
//     description: description
//   })

//   new_post.save(function (error) {
//     if (error) {
//       console.log(error)
//     }
//     res.send({
//       success: true,
//       message: 'Post saved successfully!'
//     })
//   })
// })

// // Fetch single post
// app.get('/post/:id', (req, res) => {
//   var db = req.db;
//   Post.findById(req.params.id, 'title description', function (error, post) {
//     if (error) { console.error(error); }
//     res.send(post)
//   })
// })

// // Update a post
// app.put('/posts/:id', (req, res) => {
//   var db = req.db;
//   Post.findById(req.params.id, 'title description', function (error, post) {
//     if (error) { console.error(error); }

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

// // Delete a post
// app.delete('/posts/:id', (req, res) => {
//   var db = req.db;
//   Post.remove({
//     _id: req.params.id
//   }, function(err, post){
//     if (err)
//       res.send(err)
//     res.send({
//       success: true
//     })
//   })
// })
