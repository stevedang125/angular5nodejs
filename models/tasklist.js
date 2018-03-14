
const mongoose = require('mongoose');
const config = require('../config/database');
const Schema = mongoose.Schema;
var ObjectId = mongoose.Types.ObjectId;

var taskSchema = Schema ({
    name: { type: String },
    time: { type: String },
    user_id: { type: String }
});

// taskSchema.set('collection', 'tasklist');
// module.exports = mongoose.model('Task', taskSchema);

const Task = module.exports = mongoose.model('Task', taskSchema, 'tasklist');

// Add tasks
module.exports.addTask = function(newTask, callback){
    newTask.save(callback);
}

// Delete/Update
module.exports.getTaskById = function(id, callback){
    Task.findById(id, callback);
}
// Search:
module.exports.getTaskByTaskUserID = function(taskname, callback){
    const query = {user_id: user_id};
    Task.findOne(query, callback);
}
