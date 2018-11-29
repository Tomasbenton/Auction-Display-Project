const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var ExhibitorSchema = new Schema({
  saleNumber: Number,
  fullName: String,
  tag: String,
  species: String,
  animalDescription: String,
  checkInWeight: Number,
  clubName: String,
  showClassName: String,
  placing: String,
  buyback: Number
},{
    collection: 'Exhibitor'
});

var Exhibitor = mongoose.model('Exhibitor', ExhibitorSchema);
module.exports = Exhibitor;
