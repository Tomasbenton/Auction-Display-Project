var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ExhibitorSchema = new Schema({
  saleNum: Number,
  tagNum: Number,
  firstName: String,
  lastName: String,
  species: String,
  fairWeight: Number,
  clubName: String
});

var Exhibitor = mongoose.model("Exhibitor", ExhibitorSchema);
module.exports = Exhibitor;
