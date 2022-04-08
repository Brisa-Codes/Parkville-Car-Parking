const express = require('express');
const router = express.Router();
const expressValidator = require('express-validator');
const Parking = require('../models/parkingModel');

router.use(expressValidator());

router.get('/parking', (req, res) => {
    res.render('registerParking');
});

router.post('/registerParking', (req, res) => {
    const cartype = req.body.cartype;
    const name = req.body.name;
    const numberplate = req.body.numberplate;
    const arrivaltime = req.body.arrivaltime;
    const carmodel = req.body.carmodel;
    const color = req.body.color;
    const parkingtime = req.body.parkingtime;
    const parkingfee = req.body.parkingfee;

    let errors = req.validationErrors();
    if(errors){
        res.render('registerParking')
            // return;    
    } 
    else {
        let newParking = new Parking({
            cartype: cartype,
            name: name,
            numberplate: numberplate,
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
                console.log('Parking Saved');
                res.redirect('/dashboard');
            }
        });
    }
});

module.exports = router;