const mongoose = require('mongoose');
const carTyreSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    phonenumber: {
        type: String,
        required: true
    },
    make: {
        type: String,
        required: true
    },
    tyresize: {
        type: String,
        required: true
    },
    tyrepressure: {
        type: Number,
    },
    puncturefix: {
        type: Number,
    },
    valves: {
        type: Number,
    }
});

module.exports = mongoose.model('CarTyre', carTyreSchema);