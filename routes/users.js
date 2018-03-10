
const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const passport = require('passport');
const User = require('../models/user');

router.post('/register', (req, res, next) => {
    // Create an object for a new user:
    let newUser = new User({
        name: req.body.name,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password
    });
    
    // Call function addUser in model:
    // this addUser will add salt and hash the password, then save() the user to database
    User.addUser(newUser, (err, user) =>{
        if(err){
            res.json({success: false, msg: 'Error! Failed to register user.'});
        }else{
            res.json({success: true, msg: 'User registered!'});
        }
    });
    
});

router.post('/login', (req, res, next)=>{
    res.send('Login route.');
});

router.get('/profile', (req, res, next)=>{
    res.send('Profile route.');
});

router.post('/authentication', (req, res, next)=>{
    res.send('Authentication route.');
});

router.put('/update', (req, res, next)=>{
    res.send('Update route.');
});

router.delete('/delete/:id', (req, res, next)=>{
    res.send('Detele route.');
});

module.exports = router;