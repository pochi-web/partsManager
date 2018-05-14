var express = require('express');
var router = express.Router();
var connect = require('./connect');

/* GET home page. */
router.get('/', function(req, res, next) {

  res.render('index', { title: 'Express' });
});

router.post('/', function(req,res,next){
  var itemName = req.body.itemName;
  var quantity = req.body.quantity;
  var query = 'INSERT INTO itemList(itemName,quantity) VALUES("'+ itemName +'",'+' "' + quantity + '")';

  connect.query(query,function(err,rows){
    res.redirect('/');
    console.log(itemName);
    console.log(quantity);
  });
  
});

module.exports = router;
