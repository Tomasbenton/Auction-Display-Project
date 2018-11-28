const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var BuyerSchema = new Schema({
  entrySaleNumber: Number,
  name: String,
  identifier: Number,
  contactName: String,
  email: String,
  phone: String,
  address1: String,
  address2: String,
  cityStatePostalCode: String,
  pictureName: String,
  purchaseAmount: Number,
  type: String
},{
    collection: 'Buyer'
});

var Buyer = mongoose.model('Buyer', BuyerSchema);
module.exports = Buyer;
