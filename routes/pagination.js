var express = require('express');
var router = express.Router();
var config = require('../config')
var jwt = require('jsonwebtoken');
var store = require('store');
var users = require('../users');
var randomName = require('node-random-name');

router.use(require('../middleware/checkToken'));
router.get('/', function(req, res) {
    var page = req.query.page
    var arrs = [];
    var count = 50
    for (let i = 0; i < count; i++) {
        arrs.push({
            "name": randomName(),
            "age": Math.floor(Math.random() * 60) + 20
        })
    }
    if (page == 1) {
        res.json({ array: arrs.splice(0, 19) });
    } else if (page == 2) {
        res.json({ array: arrs.splice(20, 39) });
    } else if (page == 3) {
        res.json({ array: arrs.splice(40, 50) });
    } else {
        res.json({ array: [] });
    }
  });
  
module.exports = router;