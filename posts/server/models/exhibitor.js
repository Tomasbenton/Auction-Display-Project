const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var ExhibitorSchema = new Schema({
  saleNum: Number,
  tagNum: Number,
  firstName: String,
  lastName: String,
  species: String,
  fairWeight: Number,
  clubName: String
},{
    collection: 'Exhibitor'
});

var Exhibitor = mongoose.model('Exhibitor', ExhibitorSchema);
module.exports = Exhibitor;
