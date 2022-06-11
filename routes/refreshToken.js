var express = require('express');
var router = express.Router();
var config = require('../config')
var jwt = require('jsonwebtoken');
var store = require('store');

router.post('/', function(req, res) {
    const refreshToken = req.body.token;

    if (refreshToken) {
        jwt.verify(refreshToken, config.refreshTokenSecret, function(error, decoded) {
            if (error) {
                return res.status(401).json({"status": "error", "message": "Refresh token error"})
            } else {
                const payload = {
                    'email': decoded.email
                }
    
                const newToken = jwt.sign(payload, config.secret, {
                    expiresIn: config.tokenLife 
                })
    
                const response = {
                    "status": "success",
                    "token": newToken
                }
    
                store.set(refreshToken, newToken)
    
                res.json(response)
            }
        })
    } else {
        res.status(403).json({"status": "error", "message": "No Token provided"});
    }
  });
  
  module.exports = router;
  