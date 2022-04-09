const express = require('express');
const router = express.Router();
const expressValidator = require('express-validator');
router.use(expressValidator());

const signoff = require('../models/signOffModel');

// routes 
router.get('/signoff', (req, res) => {
    res.render('signoff');
});

module.exports = router;