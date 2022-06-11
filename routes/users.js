var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
var config = require('../config')
var users = require('../users');

router.use(require('../middleware/checkToken'));
router.get('/', function(req, res) {

  const token = req.headers.authorization.split(' ')[1]
  const email = jwt.verify(token, config.secret).email;
  const response = users.users.find(data => data.email === email)
  delete response.password
  res.json(response)
});

module.exports = router;
