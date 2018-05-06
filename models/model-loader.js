'use strict';
const Sequelize = require('sequelize');
const sequelize = new Sequelize(
    'postgres://postgres:postgres@localhost/partsManager',
    {logging:true});

moduele.exports = {
    database:sequelize,
    Sequelize:Sequelize
}
