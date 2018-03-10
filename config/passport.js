
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

// For getUserById function:
const User = require('../models/user');

// For the super secret key:
const config = require('../config/database');

module.exports = function(passport){
    let options = {};
    // Extract Jwt from the authorization from the header
    // (there are many ways to do this instead for auth. from header)
    options.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme("jwt");
    options.secretOrKey = config.secret;
    // Use new Jwt Strategy, pass in the options, get a callback
    // in the callback, we'll get a payload, which inclues
    // the user information 
    passport.use(new JwtStrategy(options, (jwt_payload, done)=>{
        // console.log(jwt_payload._id); debug >__<
        User.getUserById(jwt_payload._id, (err, user)=>{
            if(err){
                return done(err, false);
            }
            if(user){
                return done(null, user);
            }else{
                return done(null, false);
            }
        });
    }));
}