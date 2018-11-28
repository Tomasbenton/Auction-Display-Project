const express = require('express')
const buyerRoutes = express.Router()

const Buyer = require('../models/Buyer')

// Add a buyer
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

// Fetch all buyers
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

// Fetch single buyer
buyerRoutes.route('/:id').get((req, res) => {
  var id = req.params.id;
  Buyer.findById(id, 'entrySaleNumber name identifier contactName email phone address1 address2 cityStatePostalZip pictureName type purchaseAmount', (err, buyer) =>{
      res.json(buyer);
  });
});

// Update buyer
buyerRoutes.route('/:id').put((req, res) => {
  Buyer.findById(req.params.id, (err, buyer) => {
    if (!buyer)
      return next(new Error('Error getting the buyer!'));
    else {
      buyer.entrySaleNumber = req.body.entrySaleNumber;
      buyer.name = req.body.name;
      buyer.identifier = req.body.identifier;
      buyer.contactName = req.body.contactName;
      buyer.email = req.body.email;
      buyer.phone = req.body.phone;
      buyer.address1 = req.body.address1;
      buyer.address2 = req.body.address2;
      buyer.cityStatePostalZip = req.body.cityStatePostalZip;
      buyer.pictureName = req.body.pictureName;
      buyer.type = req.body.type;
      buyer.purchaseAmount = req.body.purchaseAmount;
      buyer.save().then( buyer => {
          res.json('Buyer updated successfully');
      })
      .catch(err => {
            res.status(400).send("Error when updating the buyer");
      });
    }
  });
});

// Delete a buyer
buyerRoutes.route('/:id').delete((req, res) => {
  var id = req.params.id;
  Buyer.findByIdAndRemove(id, (err,buyer) =>{
        if(err) res.json(err);
        else res.json('Buyer successfully removed');
    });
});

 module.exports = buyerRoutes;
