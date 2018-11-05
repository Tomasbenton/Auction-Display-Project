var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var PostSchema = new Schema({
  saleNum: Number,
  tagNum: Number,
  firstName: String,
  lastName: String,
  species: String,
  fairWeight: Number,
  clubName: String
  //picture: File
});

var Post = mongoose.model("Post", PostSchema);
module.exports = Post;
