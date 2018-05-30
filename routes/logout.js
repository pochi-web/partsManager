var express = require('express');
var router = express.Router();
var connect = require('./connect');
var moment = require('moment-timezone');
moment.tz.setDefault("Asia/Tokyo");

/* GET home page. */
router.get('/', function(req, res, next) {
  req.session.destroy();
  res.redirect('/');
});

module.exports = router;
