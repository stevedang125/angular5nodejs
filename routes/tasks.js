
const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const passport = require('passport');
const Task = require('../models/tasklist');
const config = require('../config/database');

const mongoose = require('mongoose');
var ObjectId = mongoose.Types.ObjectId;
const Schema = mongoose.Schema;

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

    Task.getTaskById(req.body._id, (err, task) =>{
        if(err){
            res.status(500).json({errmsg:'Failed to find data to update, here is the err: '+err});
        }
        task._id = req.body._id;
        task.name = req.body.name;
        task.time = req.body.time;
        task.user_id = req.body.user_id;

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