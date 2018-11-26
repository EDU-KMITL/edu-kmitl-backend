'use strict';
module.exports = (sequelize, DataTypes) => {
  const Meetup = sequelize.define('Meetup', {
    uuid: DataTypes.STRING,
    user_id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    detail: DataTypes.STRING,
    picture: DataTypes.STRING,
    mt_date: DataTypes.DATE,
    mt_time: DataTypes.STRING,
    location: DataTypes.STRING,
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
  Meetup.associate = function(models) {
    // associations can be defined here
  };
  return Meetup;
};