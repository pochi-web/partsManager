var express = require('express');
var router = express.Router();
var connect = require('./connect');
var moment = require('moment');

/* GET home page. */
router.get('/', function(req, res, next) {
  var query = 'SELECT * FROM itemList';
  connect.query(query,function(err,rows){
    console.log(rows);
    res.render('index', { 
      title: 'アイテムリスト',
      itemList:rows      
    });
  })
  
});

router.post('/', function(req,res,next){
  var id = req.body.id;
  var itemName = req.body.itemName;
  var quantity = req.body.quantity;
  var last_modified = moment().format('YYYY-MM-DD HH:mm:ss');

  var query = 'INSERT INTO itemList(itemName,quantity,last_modified) VALUES("'+ itemName +'",'+' "' + quantity + '",'+'"'+last_modified+'")';

  connect.query(query,function(err,rows){
    res.redirect('/');
    console.log(itemName);
    console.log(quantity);
    console.log(last_modified);
  });
  
});

module.exports = router;
