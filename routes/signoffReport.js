const express = require('express');
const router = express.Router();
const SignoffUser = require('../models/signOffModel');

router.get('/signoffReport', async(req, res) => {
    try{
        const data = await SignoffUser.find({}).sort({$natural:-1});
        res.render('signoffReport', {
            signoffUsers: data
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

// delete signed off users/entry
router.get('/deletesignOffUser/:id', async(req, res) => {
    try {
        await SignoffUser.deleteOne({_id: req.params.id})
        res.redirect('back')
    }
    catch(error) {
        res.status(400).send('Unable to delete Signoff Entry')
    }
  })

module.exports = router;