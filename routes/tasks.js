
const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const passport = require('passport');
const Task = require('../models/tasklist');
const config = require('../config/database');

const mongoose = require('mongoose');
var ObjectId = mongoose.Types.ObjectId;
const Schema = mongoose.Schema;

router.get('/getlist', (req, res, next) =>{
    console.log('====************************ Im getting the list from database: '+req.query.id);

    // Task.find({}, (err, task) =>{
    //     if(err){
    //         res.status(500).json({errmsg: 'Failed to pull from database'});
    //     }
    //     console.log('****** Sending back the list: YAY')
    //     res.status(200).json({msg: task});
    // });
    // var user_id = new ObjectId(req.users.user_id);
    // console.log('the user_id is: '+user_id)
    // var query = Task.find({});
    // query.where('user_id', user_id);

    // query.exec(function(err, tasklist){
    //     if(err){
    //         console.log('There is an erro from get method: '+err);
    //     }else{
    //         res.status(200).json({msg: tasklist});
    //     }
    // });

});// close of router.get method

router.post('/add', (req, res, next) => {
    // Create an object for a new Task:
    let newTask = new Task({
        _id: req.body._id,
        name: req.body.name,
        time: req.body.time,
        user_id: req.body.user_id
    });
    // Call function addTask in model with the parameter newTask to save to the database 
    Task.addTask(newTask, (err, user) =>{
        if(err){
            res.json({success: false, msg: 'Error! Failed to register Task.'});
        }else{
            res.json({success: true, msg: 'Task registered!'});
        }
    });
});// close of router.post method

router.put('/update', (req, res, next)=>{
    console.log('Im here in the backend update:=========');
    Task.getTaskById(req.body._id, (err, task) =>{
        if(err){
            console.log('Backend update err: '+err);
            res.status(500).json({errmsg:'Failed to find data to update, here is the err: '+err});
        }
        task._id = req.body._id;
        task.name = req.body.name;
        task.time = req.body.time;
        task.user_id = req.body.user_id;
        console.log('task ID  :'+task._id);
        console.log('task.name:'+task.name);
        console.log('task.time:'+task.time);
        console.log('task USER ID:'+task.user_id);

        console.log('Calling save:');
        Task.addTask(task, (err, user)=>{
            if(err){
                console.log('Backend update err: '+err);
                res.status(500).json({success: false, msg:'Failed to find data to update, here is the err: '+err});
            }else{
                console.log('Sucess updated backend! sending data back to auth');
                res.status(200).json({success: true, msg: 'Task backend updated!'});
            }
        }); // close of addTask


    }); // close of getTaskById
});// close of put function

router.delete('/delete/:id', (req, res, next)=>{
    console.log('Im here in back end deltion ============== id is: '+req.params.id);
    Task.findOneAndRemove({_id:req.params.id}, (err, task) =>{
        if(err){
            res.json({msg: 'deletion back end error'});
            res.status(500).json({errmsg: 'Failed to delete the data'});
        }
        console.log('Sucess! Deletion backend');
        res.status(200).json({msg: task});
    });
});
 
module.exports = router;