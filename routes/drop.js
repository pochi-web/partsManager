var express = require('express');
var router = express.Router();
var connect = require('./connect');
var moment = require('moment-timezone');
moment.tz.setDefault("Asia/Tokyo");

router.get('/:id',function(req,res,next){
    var id = req.params.id;
    console.log(id);
    var query = 'SELECT * FROM itemList WHERE id = "'+ id +'" ';
    connect.query(query,function(err,rows){
    res.render('drop',{
      title:'削除',
      id:id,
      itemList:rows
    })
});
});

router.post('/:id',function(req,res,next){
    var id = req.params.id;
    var query = 'DELETE FROM itemList WHERE id="'+ id +'"';    
    connect.query(query,function(err,rows){
        console.log(query);
        res.redirect('/');
    });
    
});

module.exports = router;