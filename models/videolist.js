'use strict';
module.exports = (sequelize, DataTypes) => {
  const VideoList = sequelize.define('VideoList', {
    uuid: DataTypes.STRING,
    user_id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    detail: DataTypes.STRING,
    link: DataTypes.STRING,
    status: {
      type: DataTypes.ENUM,
      values: [
        'BAN',
        'Pending',
        'PUBLIC',
        'PRIVATE',
        'DELETE',
      ],
      defaultValue: 'Pending'
    }
  }, {});
  VideoList.associate = function(models) {
    // associations can be defined here
  };
  return VideoList;
};