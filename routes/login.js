var express = require('express');
var router = express.Router();
var connect = require('./connect');
var moment = require('moment-timezone');
moment.tz.setDefault("Asia/Tokyo");

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('login', { 
      title: 'ログイン'  
});
});

router.post('/', function(req,res,next){
  var userName = req.body.userName;
  var userEmail= req.body.userEmail;
  var password = req.body.password;

  var query = 'SELECT user_id FROM users WHERE user_email="'+userEmail+'" AND password="'+password+'" LIMIT 1';

  connect.query(query,function(err,rows){
    var userId = rows.length? rows[0]:false
    if(userId){
      req.session.userId = userId;
      res.redirect('/');
    }else{
      res.render('login',{
        message:'入力内容が間違っています。もう一度お試しください。'
      })
    }
    
  });
  
});



module.exports = router;
