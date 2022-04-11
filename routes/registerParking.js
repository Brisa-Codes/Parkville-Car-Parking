const express = require('express');
const router = express.Router();
const expressValidator = require('express-validator');

const Parking = require('../models/parkingModel');

router.use(expressValidator());

router.get('/parking', (req, res) => {
    res.render('registerParking');
});

// Post 
router.post('/registerParking', (req, res) => {
    const cartype = req.body.cartype;
    const name = req.body.name;
    const numberplate = req.body.numberplate;
    const phonenumber = req.body.phonenumber;
    const arrivaltime = req.body.arrivaltime;
    const carmodel = req.body.carmodel;
    const color = req.body.color;
    const parkingtime = req.body.parkingtime;
    const parkingfee = req.body.parkingfee;

    let errors = req.validationErrors();
    // In case of errors
    if(errors){
        res.render('registerParking')
            // return;    
    } 
    else {
        let newParking = new Parking({
            cartype: cartype,
            name: name,
            numberplate: numberplate,
            phonenumber: phonenumber,
            arrivaltime: arrivaltime,
            carmodel: carmodel,
            color: color,
            parkingtime: parkingtime,
            parkingfee: parkingfee
        }) 
        newParking.save((err) => {
            if(err){
                console.error(err);
                return;
            }
            else {
               // console.log('Parking Saved');
                res.redirect('/parkingReport');
            }
        });
    }
});

// Delete parking entry
router.get('/deleteVehicle/:id', async(req, res)=> {
    try{
      const register = await Register.findById(req.params.id)
      await Register.deleteOne({_id:req.params.id})
      res.redirect('/parkingReport');
    }
   
    catch{
          res.status(400).send('Unable to delete Vehicle from database');
        }
    });

module.exports = router;