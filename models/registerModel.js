const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

//Register Schema
const registerSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

registerSchema.plugin(passportLocalMongoose, {
    usernameField: "email",
});

// Connects to the other files
const Register = module.exports = mongoose.model('Register', registerSchema);