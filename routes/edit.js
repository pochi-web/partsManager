var express = require('express');
var router = express.Router();
var connect = require('./connect');
var moment = require('moment');

router.get('/:id',function(req,res,next){
    var id = req.params.id;
    console.log(id);
    var query = 'SELECT * FROM item_list WHERE id = "'+ id +'" ';
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
    var item_name = req.body.itemName;
    var quantity = req.body.quantity;
    var last_modified = moment().format('YYYY-MM-DD HH:mm:ss');
    var query = 'UPDATE item_list SET id="'+newId+'", item_name="'+item_name+'", quantity="'+quantity+'",last_modified="'+last_modified+'" WHERE id="'+id+'"';    
    connect.query(query,function(err,rows){
        console.log(query);
        res.redirect('/');
    });
    
});

module.exports = router;