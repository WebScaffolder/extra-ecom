'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      location: DataTypes.STRING,
      profilePhoto: DataTypes.STRING,
      gender: DataTypes.STRING,
      fb_url: DataTypes.STRING,
      tw_url: DataTypes.STRING,
      insta_url: DataTypes.STRING,
      in_url: DataTypes.STRING,
      emailConfirmed: DataTypes.BOOLEAN,
      emailConfirmedAt: DataTypes.DATE,
      role: {
        type: DataTypes.ENUM,
        values: ['customer', 'admin'],
        defaultValue: 'customer',
      },
      active: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: 'User',
    }
  );
  return User;
};
