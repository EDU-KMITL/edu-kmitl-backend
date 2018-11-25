'use strict';
module.exports = (sequelize, DataTypes) => {
  const CourseList = sequelize.define('CourseList', {
    uuid: DataTypes.STRING,
    user_id: DataTypes.INTEGER
  }, {});
  CourseList.associate = function(models) {
    // associations can be defined here
  };
  return CourseList;
};