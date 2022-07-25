var express = require('express');
var router = express.Router();
var config = require('../config')
var jwt = require('jsonwebtoken');
var store = require('store');
var users = require('../users');
var randomName = require('node-random-name');

router.use(require('../middleware/checkToken'));
router.get('/', function (req, res) {
    var page = req.query.page
    var arrs = [];
    var count = 60
    for (let i = 0; i < count; i++) {
        arrs.push({
            "id": i,
            "name": randomName() + " " + i,
            "age": Math.floor(Math.random() * 60) + 20,
            "website": "https://github.com/manhpham90vn"
        })
    }
    if (page == 1) {
        res.json({ array: arrs.slice(0, 19) });
    } else if (page == 2) {
        res.json({ array: arrs.slice(20, 39) });
    } else if (page == 3) {
        res.json({ array: arrs.slice(40, 59) });
    } else {
        res.json({ array: [] });
    }
});

module.exports = router;