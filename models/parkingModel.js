const mongoose = require('mongoose');

const parkingSchema = mongoose.Schema({
    cartype: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    numberplate: {
        type: String,
        required: true
    },
    phonenumber: {
        type: String,
        required: true
    },
    arrivaltime: {
        type: String,
        required: true
    },
    carmodel: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    parkingtime: {
        type: String,
        required: true
    },
    parkingfee: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Parking', parkingSchema);