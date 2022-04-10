const express = require('express');
const router = express.Router();
const expressValidator = require('express-validator');

const Battery = require('../models/batteryModel');

router.use(expressValidator());

// route
router.get('/battery', (req, res) => {
    res.render('registerBattery');
});

// Post
router.post('/registerBattery', (req, res) => {
    const batterysize = req.body.batterysize;
    const name = req.body.name;
    const phonenumber = req.body.phonenumber;
    const batteryfee = req.body.batteryfee;

    // Validate
    let errors = req.validationErrors();
    // In case of errors
    if(errors){
        res.render('registerBattery');
        return;
    } else {
        let newBattery = new Battery({
            batterysize: batterysize,
            name: name,
            phonenumber: phonenumber,
            batteryfee: batteryfee
        });

        newBattery.save((err) => {
            if(err){
                console.error(err);
                return;
            }
            else {
                // console.log('Battery Saved');
                res.redirect('/batteryReport');
            }
        });
    }

});

module.exports = router;