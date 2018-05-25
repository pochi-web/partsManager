var express = require('express');
var router = express.Router();
var connect = require('./connect');
var moment = require('moment');

/* GET home page. */
router.get('/', function(req, res, next) {
  
  var query = 'SELECT * FROM item_list';
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
  var item_name = req.body.itemName;
  var quantity = req.body.quantity;
  var last_modified = moment().format('YYYY-MM-DD HH:mm:ss');

  var query = 'INSERT INTO item_list(item_name,quantity,last_modified) VALUES("'+ item_name +'",'+' "' + quantity + '",'+'"'+last_modified+'")';

  connect.query(query,function(err,rows){
    res.redirect('/');
    console.log(item_name);
    console.log(quantity);
    console.log(last_modified);
  });
  
});



module.exports = router;
