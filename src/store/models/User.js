const { Model, DataTypes } = require('sequelize');
const sequelize = require('../mysql');

class User extends Model {}

User.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    role: {
      // 0: User, 1: Admin, 2: Sleep
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    numberReports: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
  },
  { sequelize, modelName: 'user' }
);

module.exports = User;
