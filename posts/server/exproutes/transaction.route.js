const express = require('express')
const transactionRoutes = express.Router()
const Transaction = require('../models/Transaction')

// Add a transaction
transactionRoutes.route('/add').post(function (req, res) {
  var transaction = new Transaction(req.body)
  if (transaction.saleNumber && transaction.bidderNumber) {
    transaction.save()
    .then(transaction => {
      res.status(200).json({'transaction': 'transaction added successfully'})
    })
    .catch(err => {
      res.status(400).send("unable to save to database")
    })
  }
})

// Fetch all transactions
transactionRoutes.route('/').get(function (req, res) {
    Transaction.find(function (err, transaction){
    if(err){
        console.log(err);
    }
    else {
        res.json(transaction);
    }
    })
})

// Fetch latest transaction
transactionRoutes.route('/saleNumber/:saleNumber').get((req, res) => {
  var saleNum = req.params.saleNumber
  Transaction.find({ 'saleNumber' : saleNum }, (err, transaction) => {
    if (err) {
      console.log(err);
      res.json(err)
    }
    else {
        res.json(transaction);
    }
  });
});

// Fetch single transaction
transactionRoutes.route('/:id').get((req, res) => {
  var id = req.params.id;
  Transaction.findById(id, (err, transaction) =>{
      res.json(transaction);
  });
});

// Fetch all transactions with certain sale number
transactionRoutes.route('/saleNumber/:saleNumber').get((req, res) => {
  var saleNum = req.params.saleNumber
  Transaction.find({ 'saleNumber' : saleNum }, (err, transaction) => {
    if (err) {
      console.log(err);
      res.json(err)
    }
    else {
        res.json(transaction);
    }
  });
});

// Delete a transaction
transactionRoutes.route('/:id').delete((req, res) => {
  var id = req.params.id;
  Transaction.findByIdAndRemove(id, (err,transaction) =>{
        if(err) res.json(err);
        else res.json('Transaction successfully removed');
    });
});

 module.exports = transactionRoutes;
