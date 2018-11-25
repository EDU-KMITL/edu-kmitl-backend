'use strict';
module.exports = (sequelize, DataTypes) => {
  const MeetupList = sequelize.define('MeetupList', {
    uuid: DataTypes.STRING,
    user_id: DataTypes.INTEGER
  }, {});
  MeetupList.associate = function(models) {
    // associations can be defined here
  };
  return MeetupList;
};