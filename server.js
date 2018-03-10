
var http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');
const passport = require('passport');

// Port number:
const port = 8080;
const app = express();

// Path to the users routes:
const users = require('./routes/users');


// Config for the database uri, and token's secret:
const config = require('./config/database');

// Connect to the database:
mongoose.connect(config.database);
mongoose.connection.on('connected', ()=>{
    console.log('Connected to the database: '+ config.database);
});
mongoose.connection.on('error', (err)=>{
    console.log('Error! Could not connect to the database: '+err);
});

// Cors middleware:
app.use(cors());

// Body parser middleware:
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Passpport:
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

// For all the users api:
app.use('/users', users);



app.get('/', (req, res) =>{
    res.send('Home page. ');
});

http.createServer(app).listen(port, () =>{
    console.log('The magical back end is running on port: '+port);
});