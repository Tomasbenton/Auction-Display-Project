const express = require('express')
const buyerRoutes = express.Router()

const Buyer = require('../models/Buyer')

buyerRoutes.route('/add').post(function (req, res) {
    var buyer = new Buyer(req.body)
    buyer.save()
    .then(buyer => {
    res.status(200).json({'buyer': 'buyer added successfully'})
    })
    .catch(err => {
    res.status(400).send("unable to save to database")
    })
})

buyerRoutes.route('/').get(function (req, res) {
    Buyer.find(function (err, buyers){
    if(err){
        console.log(err);
    }
    else {
        res.json(buyers);
    }
    })
})

// buyerRoutes.route('/delete').delete(function (req, res) {
//     // Something
// })
    
// buyerRoutes.route('/update').put(function (req, res) {
//     // Something
// })
 
 module.exports = buyerRoutes;