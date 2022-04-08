//This handles authentication
const LocalStrategy = require('passport-local').Strategy;
const Register = require('../models/registerModel');
const config = require('../config/database');
const bcrypt = require('bcryptjs');

module.exports = (passport) =>{
    // Local strategy
    passport.use(new LocalStrategy(function(email, password, done){
      // match username
      let query = { email: email };
      Register.findOne(query, function(err, registerModel){
        if(err) throw err;
  
        if(!registerModel) {
          return done(null, false, { message: 'No user found' });
        }
  // Match password
  bcrypt.compare(password, registerModel.password, function(err, isMatch){
    if (err) throw err;
    if(isMatch) {
      return done(null, registerModel);
    } else {
      return done(null, false, { message: 'Wrong password' });
    }
  });
})
})); 

passport.serializeUser(function(registerModel, done) {
    done(null, registerModel.id);
  });

  passport.deserializeUser(function(id, done) {
    Register.findById(id, function(err, registerModel) {
      done(err, registerModel);
    });
  });
};