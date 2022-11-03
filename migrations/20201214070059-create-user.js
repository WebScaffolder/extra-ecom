'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
      },
      name: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      location: {
        type: Sequelize.STRING
      },
      profilePhoto: {
        type: Sequelize.STRING
      },
      gender: {
        type: Sequelize.STRING
      },
      fb_url: {
        type: Sequelize.STRING
      },
      tw_url: {
        type: Sequelize.STRING
      },
      insta_url: {
        type: Sequelize.STRING
      },
      in_url: {
        type: Sequelize.STRING
      },
      emailConfirmed: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      emailConfirmedAt: {
        type: Sequelize.DATE
      },
      role: {
        type: Sequelize.ENUM,
        values: ['customer', 'admin'],
        defaultValue: 'customer'
      },
      active: {
        type: Sequelize.BOOLEAN,
        defaultValue: true
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Users');
  }
};