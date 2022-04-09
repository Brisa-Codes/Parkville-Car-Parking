const mongoose = require('mongoose');
const signoffUserSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    receiptno: {
        type: String,
        required: true,
        unique: true
    },
    phonenumber: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    nin: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('SignoffUser', signoffUserSchema);