var express = require('express');
var router = express.Router();
var bcrypt = require('bcrypt');
var unirest = require('unirest');



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
  console.log(title);
});


module.exports = router;
