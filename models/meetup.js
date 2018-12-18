'use strict';

const ShortUniqueId = require('short-unique-id');
module.exports = (sequelize, DataTypes) => {
  const Meetup = sequelize.define('Meetup', {
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
    Meetup.belongsTo(models.MeetupList, { foreignKey: 'uuid', targetKey: 'uuid' });
  };
  return Meetup;
};