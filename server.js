
var http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');
const passport = require('passport');

// Port number:
const port = process.env.PORT || 9090;
const app = express();

// Path to the users routes:
const users = require('./routes/users');
const tasks = require('./routes/tasks');

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

// Set the static folder:
app.use(express.static(path.join(__dirname, 'public')));

// Body parser middleware:
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Passpport:
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

// For all the users api:
app.use('/', users);
app.use('/users', tasks);


app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

http.createServer(app).listen(port, () =>{
    console.log('The magical back end is running on port: '+port);
});