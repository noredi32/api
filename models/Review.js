const { DataTypes, Sequelize } = require('sequelize');

module.exports = (sequelize) => sequelize.define('reviews', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  content: DataTypes.TEXT,
  consultantId: {
    type: Sequelize.INTEGER,
    references: {
      model: 'consultants',
      key: 'id',
    },
    onDelete: 'CASCADE',
  },
  createdAt: DataTypes.DATE,
  updatedAt: DataTypes.DATE,
});
