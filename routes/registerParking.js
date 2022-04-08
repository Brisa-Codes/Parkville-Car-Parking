const express = require('express');
const router = express.Router();
const passport = require('passport');
const expressValidator = require('express-validator');
const Register = require('../models/registerModel');
const { route } = require('./login');

route.get('/parkingRegister', (req,res) => {
    res.render('parkingRegister');
});