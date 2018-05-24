var express = require('express');
var router = express.Router();
var connect = require('./connect');
var moment = require('moment');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('register', { 
      title: 'ユーザー登録'  
});
});

router.post('/', function(req,res,next){
  var user_name = req.body.userName;
  var user_email= req.body.userEmail;
  var password = req.body.password;

  var query = 'INSERT INTO users(user_name,user_email,password) VALUES("'+ user_name +'",'+' "' + user_email + '",'+'"'+password+'")';

  connect.query(query,function(err,rows){
    res.redirect('/');
  });
  
});



module.exports = router;
