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
    var sort = req.query.sort
    var arrs = [];
    var count = 200
    if (sort == "ascending") {
        for (let i = 0; i < count; i++) {
            arrs.push({
                "id": i,
                "name": randomName() + " " + i,
                "age": Math.floor(Math.random() * 60) + 20,
                "website": "https://github.com/manhpham90vn",
                "type": "web"
            })
        }
    } else if (sort == "descending") {
        for (let i = 199; i > -1; i--) {
            arrs.push({
                "id": i,
                "name": randomName() + " " + i,
                "age": Math.floor(Math.random() * 60) + 20,
                "img": "https://avatars.githubusercontent.com/u/40340023?v=4",
                "type": "img"
            })
        }
    }
    if (page == 1) {
        res.json({ array: arrs.slice(0, 19) });
    } else if (page == 2) {
        res.json({ array: arrs.slice(20, 39) });
    } else if (page == 3) {
        res.json({ array: arrs.slice(40, 59) });
    } else if (page == 4) {
        res.json({ array: arrs.slice(60, 79) });
    } else if (page == 5) {
        res.json({ array: arrs.slice(80, 99) });
    } else if (page == 6) {
        res.json({ array: arrs.slice(100, 119) });
    } else if (page == 7) {
        res.json({ array: arrs.slice(120, 139) });
    } else if (page == 8) {
        res.json({ array: arrs.slice(140, 159) });
    } else if (page == 9) {
        res.json({ array: arrs.slice(160, 179) });
    } else if (page == 10) {
        res.json({ array: arrs.slice(180, 199) });
    } else {
        res.json({ array: [] });
    }
});

module.exports = router;