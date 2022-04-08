const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const Register = require('../models/registerModel');

router.get('/register', (req, res) => {
    res.render('register');
});

router.post('/register', async (req, res) => {
   
    try{
        const newUser = new Register(req.body);
        let user = await Register.findOne({email:req.body.email});
        if(user){
            return res.status(400).send('You cant register, email already exists');
        }
        else {
            // Hashing Passwords
            bcrypt.genSalt(7,(err,salt) => {
                bcrypt.hash(newUser.password, salt,(err,hash) =>{
                    if(err){
                        console.error(err);
                        return;
                    }
                    newUser.password = hash;
                });
            });

            await Register.register(newUser, req.body.password, (err) => {
                if(err){ //Register method has an inbuilt encryption
                    throw err;
                }
                res.redirect('/');
            } );
        }
       
    }

    catch(err){
        console.log(err);
        res.send('You data wasnt saved')
    }

});

module.exports = router;