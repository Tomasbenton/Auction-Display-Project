const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var BuyerSchema = new Schema({
  bidderNumber: Number,
  name: String,
  contactName: String,
  phone: String,
  email: String,
  logoFileName: String
},{
    collection: 'Buyer'
});

var Buyer = mongoose.model('Buyer', BuyerSchema);
module.exports = Buyer;
