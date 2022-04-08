const express = require('express');
const router = express.Router();
const passport = require('passport');


router.get('/', (req, res) => {
    res.render('index');
});

router.post('/', passport.authenticate('local', { failureRedirect: '/' }),(req, res) => {
	// console.log("This is the login data", req.body)  prints the user's credentials
	req.session.user = req.user
	res.redirect('/register');
});

module.exports = router;