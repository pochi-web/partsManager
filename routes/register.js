var express = require('express');
var router = express.Router();
var connect = require('./connect');
var moment = require('moment-timezone');
moment.tz.setDefault("Asia/Tokyo");
var crypto = require('crypto');


/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('register', { 
      title: 'ユーザー登録'  
});
});

router.post('/', function(req,res,next){
  
  var userName = req.body.userName;
  var userEmail= req.body.userEmail;
  var cipher = crypto.createCipher('aes192', 'a password');
  var encrypted = cipher.update('userName', 'utf8', 'hex');
      encrypted += cipher.final('hex');
  var password = encrypted;

  var query = 'INSERT INTO users(user_name,user_email,password) VALUES("'+ userName +'",'+' "' + userEmail + '",'+'"'+password+'")';

  connect.query(query,function(err,rows){
    res.redirect('/');
  });
  
});



module.exports = router;
