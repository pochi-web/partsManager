var express = require('express');
var router = express.Router();
var connect = require('./connect');
var moment = require('moment-timezone');
moment.tz.setDefault("Asia/Tokyo");

/* GET home page. */
router.get('/', function(req, res, next) {
  
  var query = 'SELECT * FROM itemList';
  connect.query(query,function(err,rows){
    console.log(rows);
    res.render('add', { 
      title: '新規品目追加',
      itemList: rows      
    });
  })
});

router.post('/', function(req,res,next){
  var category = req.body.category;
  var producer = req.body.producer;
  var itemName = req.body.itemName;
  var product_number = req.body.product_number;
  var rack = req.body.rack;
  var palette = req.body.palette;
  var vender = req.body.vender;
  var used = req.body.used;
  var brand_new = req.body.new;
  var quantity = req.body.quantity;
  var unit_price = req.body.unit_price;
  var amount = unit_price*brand_new;
  var mounted = req.body.mounted;
  var proper_stock = req.body.proper_stock;
  var charge = req.body.charge;

  
  var last_modified = moment().format("YYYY-MM-DD");

  var query = 'INSERT INTO itemList(category,producer,itemName,product_number,rack,palette,vender,used,brand_new,unit_price,amount,mounted,proper_stock,charge,last_modified) VALUES("'+ category +'",' + '  "'+ producer +'", '+' "'+ itemName +'", '+' "'+ product_number +'", '+' "'+ rack +'", '+' "'+ palette +'", '+' "'+ vender +'", '+' "'+ used +'", '+' "' + brand_new + '", '+' "' + unit_price + '", '+' "'+amount+'",'+' "'+mounted+'",'+'"'+proper_stock+'",'+'"'+charge+'",'+' "' + last_modified + '")';

  connect.query(query,function(err,rows){
    res.redirect('/');
    console.log(query);
    console.log('test');
  });
  
});



module.exports = router;
