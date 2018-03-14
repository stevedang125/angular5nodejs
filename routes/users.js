
const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const passport = require('passport');
const User = require('../models/user');
const config = require('../config/database');

const Task = require('../models/tasklist');
const mongoose = require('mongoose');
var ObjectId = mongoose.Types.ObjectId;
const Schema = mongoose.Schema;

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


router.get('/profile', passport.authenticate('jwt', {session: false}), (req, res, next)=>{
    console.log('Im here in backend for Profile');
    res.json({user: req.user});
});

// login 
router.post('/authentication', (req, res, next)=>{
    const username = req.body.username;
    const password = req.body.password;
    
    User.getUserByUsername(username, (err, user) => {
        if(err){
            throw err;
        }

        if(!user){
            return res.json({ success:false, msg:'User not found!' });
        }
        
        User.comparePassword(password, user.password, (err, isMatch) => {
            if(err){
                throw err;
            }
            
            if(isMatch){
                const token = jwt.sign(user.toJSON(), config.secret,{expiresIn:604800});
                res.json({
                    success: true,
                    token: 'JWT '+token,
                    user: {
                        id: user._id,
                        name: user.name,
                        username: user.username,
                        email: user.email
                    }
            });
              
            } else{
                return res.json({success:false, msg:'Wrong password!'});
            }
        });
    });
});


router.get('/dashboard', passport.authenticate('jwt', {session: false}), (req, res, next)=>{
    console.log('Im here in backend for Dashboard '+req.user.id);

    var user_id = new ObjectId(req.user.id);
    console.log('=================the user_id is: '+user_id)
    var query = Task.find({});
    query.where('user_id', user_id);

    query.exec(function(err, tasklist){
        if(err){
            console.log('There is an erro from get method: '+err);
        }else{
            console.log('Success! res back to auth')
            res.status(200).json({user: req.user, tasklist: tasklist});
        }
    });


});

 
module.exports = router;