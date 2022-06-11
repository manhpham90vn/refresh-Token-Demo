var express = require('express');
var router = express.Router();
var config = require('../config')
var jwt = require('jsonwebtoken');
var store = require('store');
var users = require('../users');

router.post('/', function(req, res) {
    const postData = req.body;
    if (users.users.some(item => item.email === postData.email) && users.users.some(item => item.password == postData.password)) {

        const payload = { 'email': postData.email }

        const token = jwt.sign(payload, config.secret, {
            expiresIn: config.tokenLife 
        })

        const refreshToken = jwt.sign(payload, config.refreshTokenSecret, {
            expiresIn: config.refreshTokenLife
        })

        store.set(refreshToken, token);

        const response = {
            "status": "success",
            "token": token,
            "refreshToken": refreshToken
        }
        
        res.json(response)
    } else {
        res.json({"status": "error", "message": "login error"})
    }
  });
  
module.exports = router;