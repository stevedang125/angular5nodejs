
const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const passport = require('passport');
const User = require('../models/user');
const config = require('../config/database');

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

router.get('/profile', passport.authenticate('jwt', {session: false}), (req, res, next)=>{
    res.json({user: req.user});
});

// // get all the data 
// router.get('/fetch', (req,res,next) => {
//     User.find({}, (err, users)=>{
//         if(err){
//             res.status(500).json({errmsg: 'Failed to pull data from database:'+err});
//         }
//         res.status(200).json({msg: users});
//     });
// });

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

router.put('/update', (req, res, next)=>{
    res.send('Update route.');
});

router.delete('/delete/:id', (req, res, next)=>{
    res.send('Detele route.');
});

module.exports = router;