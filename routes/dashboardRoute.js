const express = require('express');
const router = express.Router();

router.use('/dashboard', (req, res) => {
    res.render('dashboard');
});

module.exports = router;