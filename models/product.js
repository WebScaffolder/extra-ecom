'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Product.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    title: DataTypes.STRING,
    price: DataTypes.STRING,
    img_url: DataTypes.TEXT,
    short_description: DataTypes.TEXT,
    long_description: DataTypes.TEXT,
    additional_info: DataTypes.TEXT,
    sku: DataTypes.STRING,
    availability: DataTypes.STRING,
    category: DataTypes.STRING,
    tag: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};