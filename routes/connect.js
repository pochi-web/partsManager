var mysql = require('mysql');

var dbconfig = {
    host:'localhost',
    user:'root',
    password:'root',
    database:'partsManager'
};

var connect = mysql.createPool(dbconfig);

module.exports = connect;