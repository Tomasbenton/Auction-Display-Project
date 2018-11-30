const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var ExhibitorSchema = new Schema({
  entrySaleNumber: Number,
  fullName: String,
  tag: String,
  animalDescription: String,
  checkInWeight: Number,
  className: String,
  departmentName: String,
  clubName: String,
  showClassName: String,
  pictureName: String
},{
    collection: 'Exhibitor'
});

var Exhibitor = mongoose.model('Exhibitor', ExhibitorSchema);
module.exports = Exhibitor;
