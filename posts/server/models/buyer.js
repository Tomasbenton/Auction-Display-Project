const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var BuyerSchema = new Schema({
  type: String,
  businessName: String,
  firstName: String,
  lastName: String,
  purchaseAmount: Number,
  logoImage: String
},{
    collection: 'Buyer'
});

var Buyer = mongoose.model('Buyer', BuyerSchema);
module.exports = Buyer;
