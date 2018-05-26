var express = require('express');
var router = express.Router();
var connect = require('./connect');
var moment = require('moment');

router.get('/:id',function(req,res,next){
    var id = req.params.id;
    console.log(id);
    var query = 'SELECT * FROM itemList WHERE id = "'+ id +'" ';
    connect.query(query,function(err,rows){
    res.render('edit',{
      title:'編集',
      id:id,
      itemList:rows
    })
});
});

router.post('/:id',function(req,res,next){
    var id = req.params.id;
    var newId = req.body.id;
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
    var last_modified = moment().format('YYYY-MM-DD HH:mm:ss');
    var query = 'UPDATE itemList SET id="'+newId+'", category="'+category+'", producer="'+producer+'",itemName="'+itemName+'", product_number="'+product_number+'",rack="'+rack+'",palette="'+palette+'",vender="'+vender+'",used="'+used+'",brand_new="'+brand_new+'",quantity="'+quantity+'",last_modified="'+last_modified+'" WHERE id="'+id+'"';    
    connect.query(query,function(err,rows){
        console.log(query);
        res.redirect('/');
    });
    
});

module.exports = router;