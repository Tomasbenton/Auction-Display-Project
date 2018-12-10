const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var TransactionSchema = new Schema({
  saleNumber: Number,
  bidderNumber: String,
  purchaseAmount: Number,
  purchaseType: String
},{
    collection: 'Transaction'
});

var Transaction = mongoose.model('Transaction', TransactionSchema);
module.exports = Transaction;
