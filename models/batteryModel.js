const mongoose = require('mongoose');
const batterySchema = mongoose.Schema({
    batterysize: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    phonenumber: {
        type: String,
        required: true
    },
    batteryfee: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Battery', batterySchema);