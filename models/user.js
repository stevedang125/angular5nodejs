
const mongoose = require('mongoose');
const config = require('../config/database');
const bcrypt = require('bcryptjs');

const Schema = mongoose.Schema;

var userSchema = Schema ({
    name: { type: String },
    email: { type: String, required: true },
    username: { type: String, required: true },
    password: { type: String, required: true }
});

const User = module.exports = mongoose.model('User', userSchema);

// Register
module.exports.addUser = function(newUser, callback){
    bcrypt.genSalt(10, (err, salt)=>{
        if(err) throw err;
        bcrypt.hash(newUser.password, salt, (err, hash)=>{
            if(err) throw err;
            newUser.password = hash;
            newUser.save(callback);
        });
    });
}

// Delete:
module.exports.getUserById = function(id, callback){
    User.findById(id, callback);
}
// Search:
module.exports.getUserByUsername = function(username, callback){
    const query = {username: username};
    User.findOne(query, callback);
}