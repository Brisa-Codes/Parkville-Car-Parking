const express = require('express');
const Parking = require('../models/parkingModel');
const router = express.Router();

// Get Route
router.get('/parkingreport', async(req,res)=>{
    // pick data
    try {
        //  return all data
        const data = await Parking.find({}).sort({$natural:-1});

        res.render('parkingReport', {
          parkings : data
        })

      } catch(error) {
        return res.status(400).send(
          { 
            status: 400,
            message: 'Registrations have not been retrieved',
            error
          });
    }
});

// Delete Parking entry from Parking Report
router.get('/deleteParking/:id', async(req, res) => {
  try {
      await Parking.deleteOne({_id: req.params.id})
      res.redirect('back')
  }
  catch(error) {
      res.status(400).send('Unable to delete Entry')
  }
});

module.exports = router;