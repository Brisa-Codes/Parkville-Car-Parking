const express = require('express');
const router = express.Router();
const carTyre = require('../models/carTyreModel');

// CarTyre Route
router.get('/carTyreReport', async(req, res) => {
    // console.log('Car Tyre Report');
    // Pick data
    try {
        // Returns all entries in the database collection
        const data = await carTyre.find({}).sort({$natural:-1});

        res.render('carTyreReport', {
            cartyres : data
        })
    }
    // catch errors
    catch(error) {
    return res.status(400).send(
        {
            status: 400,
            message: 'Cannot fetch car tyre Entries',
            error
        });
    }
});

// delete cartyre entry
router.get('/deletecarTyre/:id', async(req, res) => {
    try {
        await carTyre.deleteOne({_id: req.params.id})
        res.redirect('back')
    }
    catch(error) {
        res.status(400).send('Unable TO delete Entry')
    }
  })

module.exports = router;