const express = require('express');
const router = express.Router();
const passport = require('passport');
const expressValidator = require('express-validator');
const SignoffUser = require('../models/signOffModel');

router.use(expressValidator());

// routes 
router.get('/signoffUser', (req, res) => {
    res.render('signoffUser');
});

// Post route
router.post('/signoffUser', (req, res) => {
    const name = req.body.name;
    const receiptno = req.body.receiptno;
    const phonenumber = req.body.phonenumber;
    const time = req.body.time;
    const gender = req.body.gender;
    const nin = req.body.nin;

    let errors = req.validationErrors();
    // In case of errors
    if(errors){
        res.render('signoffUser')
        // return
    } else {
        const newsignOffUser = new SignoffUser({
            name: name,
            receiptno: receiptno,
            phonenumber: phonenumber,
            time: time,
            gender: gender,
            nin: nin
        });

        newsignOffUser.save((err) => {
            if(err) {
                console.error(err);
                return;
            } 
            else {
                console.log('Data saved successfully');
                res.redirect('/signoffReport');
            }
        });
    }
});

module.exports = router;