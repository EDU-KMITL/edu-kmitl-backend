'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      email: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      role: {
        type: Sequelize.ENUM,
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
        type: Sequelize.ENUM,
        values: [
          'BAN',
          'ACTIVATE',
          'NOT_ACTIVATE'
        ],
        defaultValue: 'NOT_ACTIVATE'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users');
  }
};