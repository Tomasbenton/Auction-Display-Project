const express = require('express')
const exhibitorRoutes = express.Router()

const Exhibitor = require('../models/Exhibitor')

exhibitorRoutes.route('/add').post(function (req, res) {
    var exhibitor = new Exhibitor(req.body)
    exhibitor.save()
    .then(exhibitor => {
    res.status(200).json({'exhibitor': 'exhibitor added successfully'})
    })
    .catch(err => {
    res.status(400).send("unable to save to database")
    })
})

exhibitorRoutes.route('/').get(function (req, res) {
    Exhibitor.find(function (err, exhibitors){
    if(err){
        console.log(err);
    }
    else {
        res.json(exhibitors);
    }
    })
})
 
 module.exports = exhibitorRoutes;