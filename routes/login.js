var express = require('express');
var router = express.Router();
var connect = require('./connect');
var moment = require('moment-timezone');
moment.tz.setDefault("Asia/Tokyo");
var crypt0 = require('crypto');

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


  var query = 'SELECT user_id FROM users WHERE user_email="'+userEmail+'" LIMIT 1';

  connect.query(query,function(err,rows){
    password = rows.password;
    function logPass (password){
      var decipher = crypto.createDecipher('aes192','userName');
      var encrypt = password;
      var decrypt = decrypt.update(encrypted, 'hex', 'utf8');
        decrypted += decipher.final('utf8');
        return decypted;
    };
    var userId = rows.length? rows[0]:false
    if(userId || decrypted == password){
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
