const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var TransactionSchema = new Schema({
  saleNumber: Number,
  bidders: String,
  purchaseAmount: Number,
  purchaseType: String
},{
    collection: 'Transaction'
});

var Transaction = mongoose.model('Transaction', TransactionSchema);
module.exports = Transaction;
