var mysql = require('mysql');

var dbconfig = {
    host:'localhost',
    user:'root',
    password:'kazu7188',
    database:'partsManager'
};

var connect = mysql.createPool(dbconfig);

module.exports = connect;