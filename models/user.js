'use strict';
const Promise = require('bluebird')
const bcrypt = Promise.promisifyAll(require('bcrypt-nodejs'))

function hashPassword(User, options) {
  const SALT_FACTOR = 8

  if (!User.changed('password')) {
    return
  }

  return bcrypt
    .genSaltAsync(SALT_FACTOR)
    .then(salt => bcrypt.hashAsync(User.password, salt, null))
    .then(hash => {
      User.setDataValue('password', hash)
    })
}
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: {
      type: DataTypes.STRING,
      unique: true
    },
    password: DataTypes.STRING,
    role: {
      type: DataTypes.ENUM,
      values: [
        'ADMIN',
        'STUDENT',
        'TEACHER',
        'GOLD_TEACHER',
        'GUEST'
      ],
      defaultValue: 'STUDENT'
    },
    status: {
      type: DataTypes.ENUM,
      values: [
        'BAN',
        'ACTIVATE',
        'NOT_ACTIVATE'
      ],
      defaultValue: 'NOT_ACTIVATE'
    }
  }, {
      hooks: {
        beforeSave: hashPassword
      }
    });

  User.prototype.comparePassword = function (password) {
    return bcrypt.compareAsync(password, this.password)
  }

  User.associate = function (models) {
    User.belongsTo(models.Course, { foreignKey: 'id', targetKey: 'user_id' });
  };
  return User;
}; 