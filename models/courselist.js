'use strict';
module.exports = (sequelize, DataTypes) => {
  const CourseList = sequelize.define('CourseList', {
    uuid: DataTypes.STRING,
    user_id: DataTypes.INTEGER,
    status: {
      type: DataTypes.ENUM,
      values: [
        'Approve',
        'Pending',
        'Reject',
      ],
      defaultValue: 'Pending'
    }
  }, {});
  CourseList.associate = function(models) {
    CourseList.belongsTo(models.Course, { foreignKey: 'uuid', targetKey: 'uuid' });
  };
  return CourseList;
};