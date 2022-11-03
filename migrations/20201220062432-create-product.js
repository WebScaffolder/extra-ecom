'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Products', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
      },
      title: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.STRING
      },
      img_url: {
        type: Sequelize.TEXT
      },
      short_description: {
        type: Sequelize.TEXT
      },
      long_description: {
        type: Sequelize.TEXT
      },
      additional_info: {
        type: Sequelize.TEXT
      },
      sku: {
        type: Sequelize.STRING
      },
      availability: {
        type: Sequelize.STRING
      },
      category: {
        type: Sequelize.STRING
      },
      tag: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('Products');
  }
};