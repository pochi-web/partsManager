var express = require('express');
var router = express.Router();
var connect = require('./connect');
var moment = require('moment-timezone');
moment.tz.setDefault("Asia/Tokyo");

var query = 'SELECT category FROM itemList'
var getcategories = connect.query(query,function(err,categories){

})


module.exports = getcategories;
