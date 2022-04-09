// dependencies
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const expressValidator = require('express-validator');
const flash = require('connect-flash');
const session = require('express-session');
const passport = require('passport');
const expressSession = require('express-session')({
    secret: 'secret',
    resave: false,
    saveUninitialized: false
});

const cors = require('cors');

// Database configuration
const config = require('./config/database');

//Connection
const app = express();

const login = require('./routes/home');
const register = require('./routes/registerUser');
const Register = require('./models/registerModel');
const dashboard = require('./routes/dashboardRoute');
const parking = require('./routes/registerParking');
const parkingReport = require('./routes/parkingReport');
const signoff = require('./routes/signOff');

// Establish a connection to the database
mongoose.connect(config.database);
const db = mongoose.connection;

db.once('open', () => {
    console.log('Connected to the MongoDB database');
});

db.on('error', (err) => {
    console.log(err);
});

// view engine setup
app.engine('pug', require('pug').__express);
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// Body parser middle-ware
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// login methods
app.use(expressSession);
app.use(passport.initialize()); 
app.use(passport.session()); 
app.use(cors());

passport.use(Register.createStrategy());
//This generates a serial number to the user who has logged in
passport.serializeUser(Register.serializeUser()); 
//This terminates the serial number after user logs out
passport.deserializeUser(Register.deserializeUser()); 

// Routes
app.use('/', login);
app.use('/', register);
app.use('/', dashboard);
app.use('/', parking);
app.use('/', parkingReport)
app.use('/', signoff);

// Sends a message incase of a page is not found
app.get('*', (req, res) => {
    res.status(404).send('The page does not exist');
}); 

// Server
app.listen(3000, () => {
    console.log('Server running on port 3000');
});