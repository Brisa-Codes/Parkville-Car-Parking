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

module.exports = router;