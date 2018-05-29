var mysql = require('mysql');

var dbconfig = {
    host:'localhost',
    user:'root',
    password:'root',
    database:'partsManager',
    timezone: 'jst'
};

var connect = mysql.createConnection(dbconfig);

module.exports = connect;