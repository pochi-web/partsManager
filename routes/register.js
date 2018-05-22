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
  var userName = req.body.userName;
  var userEmail= req.body.userEmail;
  var password = req.body.password;

  var query = 'INSERT INTO users(user_name,user_email,password) VALUES("'+ userName +'",'+' "' + userEmail + '",'+'"'+password+'")';

  connect.query(query,function(err,rows){
    res.redirect('/');
    console.log(userName);
    console.log(userEmail);
    console.log(password);
    console.log(query);
  });
  
});



module.exports = router;
