const { Model, DataTypes } = require('sequelize');
const sequelize = require('../mysql');

class Report extends Model {}

Report.init(
  {
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    reportPhoto: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { sequelize, modelName: 'report' }
);

module.exports = Report;
