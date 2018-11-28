const express = require('express')
const exhibitorRoutes = express.Router()

const Exhibitor = require('../models/Exhibitor')

// Add a exhibitor
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

// Fetch all exhibitors
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

// Fetch single exhibitor
exhibitorRoutes.route('/:id').get((req, res) => {
  var id = req.params.id;
  Exhibitor.findById(id, 'entrySaleNumber fullName tag animalDescription checkInWeight className departmentName clubName showClassName pictureName', (err, exhibitor) =>{
      res.json(exhibitor);
  });
});

// Update exhibitor
exhibitorRoutes.route('/:id').put((req, res) => {
  Exhibitor.findById(req.params.id, (err, exhibitor) => {
    if (!exhibitor)
      return next(new Error('Error getting the exhibitor!'));
    else {
      exhibitor.entrySaleNumber = req.body.entrySaleNumber;
      exhibitor.fullName = req.body.fullName;
      exhibitor.tag = req.body.tag;
      exhibitor.animalDescription = req.body.animalDescription;
      exhibitor.checkInWeight = req.body.checkInWeight;
      exhibitor.className = req.body.className;
      exhibitor.departmentName = req.body.departmentName;
      exhibitor.clubName = req.body.clubName;
      exhibitor.showClassName = req.body.showClassName;
      exhibitor.pictureName = req.body.pictureName;
      exhibitor.save().then( exhibitor => {
          res.json('Exhibitor updated successfully');
      })
      .catch(err => {
            res.status(400).send("Error when updating the exhibitor");
      });
    }
  });
});

// Delete a exhibitor
exhibitorRoutes.route('/:id').delete((req, res) => {
  var id = req.params.id;
  Exhibitor.findByIdAndRemove(id, (err,exhibitor) =>{
        if(err) res.json(err);
        else res.json('Exhibitor successfully removed');
    });
});

 module.exports = exhibitorRoutes;
