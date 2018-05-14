'use strict';

const loader = require('./model-loader');
const Sequelize = loader.Sequelize;

const User = loaderl.database.define('users',{
    userId:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        allowNull:false
    },
    username:{
        type:Sequelize.STRING,
        allowNull:false
    },
    password:{
        type:Sequelize.STRING,
        allowNull:false
    }
},{
    freezeTableNmae:true,
    timestamps:false
});

module.exports = User;