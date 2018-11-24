'use strict';
const ShortUniqueId = require('short-unique-id');
module.exports = (sequelize, DataTypes) => {
  const Course = sequelize.define('Course', {
    uuid: {
      type: DataTypes.STRING,
      primaryKey: true,
      defaultValue: function () {
        const rnd = new ShortUniqueId();
        return rnd.randomUUID(13);
      },
      allowNull: false
    },
    user_id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    detail: DataTypes.STRING,
    picture: DataTypes.STRING,
    status: {
      type: DataTypes.ENUM,
      values: [
        'BAN',
        'PUBLIC',
        'PRIVATE',
        'DELETE',
      ],
      defaultValue: 'PUBLIC'
    }
  }, {});
  Course.associate = function (models) {
    Course.hasMany(models.User, { foreignKey: 'id', targetKey: 'user_id' });
  };
  return Course;
};