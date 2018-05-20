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
      title:'編集画面',
      itemList:rows
    })
});
});

module.exports = router;