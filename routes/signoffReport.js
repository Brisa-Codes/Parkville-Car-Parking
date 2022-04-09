const express = require('express');
const router = express.Router();
const SignoffUser = require('../models/signOffModel');

router.get('/signoffReport', async(req, res) => {
    try{
        const data = await SignoffUser.find({}).sort({$natural:-1});
        res.render('signoffReport', {
            signoffs: data
        })
    }
    catch(error){
        return res.status(400).send({
            status: 400,
            message: 'Cannot get signoff Report',
            error
        });
    }
});

module.exports = router;