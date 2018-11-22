const express = require('express')
const userRoutes = express.Router()

const User = require('../models/User')

userRoutes.route('/add').post(function (req, res) {
    var user = new User(req.body)
    user.save()
    .then(user => {
    res.status(200).json({'user': 'user added successfully'})
    })
    .catch(err => {
    res.status(400).send("unable to save to database")
    })
})

userRoutes.route('/').get(function (req, res) {
    User.find(function (err, users){
    if(err){
        console.log(err);
    }
    else {
        res.json(users);
    }
    })
})
 
 module.exports = userRoutes;