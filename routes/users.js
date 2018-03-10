
const express = require('express');
const router = express.Router();

router.post('/register', (req, res, next)=>{
    res.send('Register route.');
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