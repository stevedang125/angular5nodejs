
const mongoose = require('mongoose');
const config = require('../config/database');


const Schema = mongoose.Schema;

var taskSchema = Schema ({
    // foreignKey
    name: { type: String },
    time: { type: String }
});

const Task = module.exports = mongoose.model('Task', taskSchema, 'tasklist');

// Add tasks
module.exports.addTask = function(newUser, callback){
    
    newUser.save(callback);
}

// Delete/Update
module.exports.getTaskById = function(id, callback){
    Task.findById(id, callback);
}
// Search:
module.exports.getTaskByTaskname = function(username, callback){
    const query = {name: name};
    Task.findOne(query, callback);
}
