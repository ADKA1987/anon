var express = require('express');
var router = express.Router();
var passport = require('passport');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'ANSN' });
});

router.post('/dashboard',function (req, res) {
  res.redirect('/dashboard');
});

module.exports = router;
