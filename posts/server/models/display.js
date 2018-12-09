const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var DisplaySchema = new Schema({
  saleNumber: Number,
  currentSaleCheck: Boolean,
  previousSaleCheck: Boolean,
},{
    collection: 'Display'
});

var Display = mongoose.model('Display', DisplaySchema);
module.exports = Display;
