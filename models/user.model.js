/**
 * Created by MisterNT on 4/30/2017.
 */
const Connection = require('./model')
const Sequelize  = require('sequelize')

const User = Connection.define('users', {
    username: {
        type: Sequelize.STRING,
        unique: true
    },
    password: {
        type: Sequelize.STRING
    },
    firstname: {
        type: Sequelize.STRING
    },
    lastname: {
        type: Sequelize.STRING
    },
    image: {
        type: Sequelize.STRING
    },
    gender: {
        type: Sequelize.STRING
    },
    birthday: {
        type: Sequelize.DATE
    },
}, {
    underscored: true,
    freezeTableName: true // Model tableName will be the same as the model name
});

module.exports = User;