const express = require('express');
const Battery = require('../models/batteryModel');
const router = express.Router();

// Battery Route
router.get('/batteryreport', async(req, res) => {
    // console.log('Battery Report');
    // Pick data
    try {
        // Returns all entries in the database collection
        const data = await Battery.find({}).sort({$natural:-1});

        res.render('batteryReport', {
            batteries : data
        })
    }
    // catch errors
    catch(error) {
    return res.status(400).send(
        {
            status: 400,
            message: 'Cannot fetch battery Entries',
            error
        });
    }
});

// Delete User from Battery Report
router.get('/deleteBattery/:id', async(req, res) => {
    try {
        await Battery.deleteOne({_id: req.params.id})
        res.redirect('back')
    }
    catch(error) {
        res.status(400).send('Unable TO delete Entry')
    }
})

module.exports = router;