const express = require('express');
const Parking = require('../models/parkingModel');
const router = express.Router();

router.get('/parkingreport', async(req,res)=>{
    // to pick data from the 
    try {
        // helps return all .....
        const data = await Parking.find({}).sort({$natural:-1});
       
        //  //The sum aggregate
        //  let totalTyre = await Tyre.aggregate([
        //   {$group:{_id:'$all', totalTyre:{ $sum:'$amount'}}}
        //   // {$group:{_id:'$all', totalValves:{ $sum:'$valves'}}}
          
        // ]);

        res.render('parkingReport', {
          parkings : data
           // total : totalTyre[0],
          // total : totalValves[0]
        })
      } catch(error) {
        return res.status(400).send(
          { 
            status: 400,
            message: 'Oops failed to fetch all registrations',
            error
          });
    }
});

module.exports = router;