'use strict';
module.exports = (sequelize, DataTypes) => {
  const MeetupList = sequelize.define('MeetupList', {
    uuid: DataTypes.STRING,
    user_id: DataTypes.INTEGER
  }, {});
  MeetupList.associate = function(models) {
    MeetupList.belongsTo(models.Meetup, { foreignKey: 'uuid', targetKey: 'uuid' });
  };
  return MeetupList;
};