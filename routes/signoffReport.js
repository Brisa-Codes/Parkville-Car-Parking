const express = require('express');
const router = express.Router();
const signoff = require('../models/signOffModel');

router.get('./signoffReport', async(req, res) => {
    try{
        const data = await signoff.find({}).sort({$natural:-1});
        res.render('signoffReport', {signoffs: data});
    }
    catch(error){
        return res.status(400).send({
            status: 400,
            message: 'Failed to get signoff report',
            error
        });
    }
});

module.exports = router;