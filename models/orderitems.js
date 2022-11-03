'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class OrderItems extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  OrderItems.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },

      title: { type: DataTypes.STRING, allowNull: false },

      quantity: { type: DataTypes.STRING, allowNull: false },

      img_url: { type: DataTypes.STRING, allowNull: false },

      price: { type: DataTypes.STRING, allowNull: false },

      productId: {
        type: DataTypes.UUID,
        allowNull: true,
      },

      userId: {
        type: DataTypes.UUID,
        onDelete: 'CASCADE',
        allowNull: false,
      },

      orderId: {
        type: DataTypes.UUID,
        onDelete: 'CASCADE',
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'OrderItems',
    }
  );
  return OrderItems;
};
