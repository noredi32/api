const { DataTypes } = require('sequelize');

module.exports = (sequelize) => sequelize.define('appointments', {
 id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  day: DataTypes.DATE,
  time: DataTypes.TIME,
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
  createdAt: DataTypes.DATE,
  updatedAt: DataTypes.DATE,
});