
const mongoose = require('mongoose');
const config = require('../config/database');
const Schema = mongoose.Schema;
// var ObjectId = Schema.Types.ObjectId;
// var theid = mongoose.Types.ObjectId;
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
    console.log('Im in addTask, save: =================');
    console.log('newTask name: '+newTask._id);
    console.log('newTask name: '+newTask.name);
    console.log('newTask time: '+newTask.time);
    console.log('newTask name: '+newTask.user_id);
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
