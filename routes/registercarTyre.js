const express = require('express');
const router = express.Router();
const expressValidator = require('express-validator');

const CarTyre = require('../models/carTyreModel');

router.use(expressValidator());

// Route
router.get('/registercarTyre', (req, res) => {
    res.render('registerCarTyre');
});

// Post
router.post('/registerCarTyre', (req, res) => {
    const name = req.body.name;
    const phonenumber = req.body.phonenumber;
    const make = req.body.make;
    const tyresize = req.body.tyresize;
    const tyrepressure = req.body.tyrepressure;
    const puncturefix = req.body.puncturefix;
    const valves = req.body.valves;


    let errors = req.validationErrors();
    // In case of errors
    if (errors) {
        res.render('registerCarTyre');
        return;
    } else {
        let newCarTyre = new CarTyre({
            name: name,
            phonenumber: phonenumber,
            make: make,
            tyresize: tyresize,
            tyrepressure: tyrepressure,
            puncturefix: puncturefix,
            valves: valves
        });

        newCarTyre.save((err) => {
            if(err) {
                console.error(err);
                return;
            }
            else {
                // console.log('Car Tyre Saved');
                res.redirect('/carTyreReport');
            }
        });
    }
});

module.exports = router;