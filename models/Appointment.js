const { DataTypes } = require('sequelize');

module.exports = (sequelize) => sequelize.define('appointments', {
 id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  userId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'users',
      key: 'id',
    },
    onDelete: 'CASCADE',
  },
  consultantId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'consultants',
      key: 'id',
    },
    onDelete: 'CASCADE',
  },
  day: DataTypes.DATE,
  schedule: DataTypes.TIME,
  createdAt: DataTypes.DATE,
  updatedAt: DataTypes.DATE,
});