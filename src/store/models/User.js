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
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
    },
    role: {
      // 0: User, 1: Admin, 2: Sleep
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: '00 0 000 000 0000',
    },
    numberReports: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
  },
  { sequelize, modelName: 'user' }
);

module.exports = User;
