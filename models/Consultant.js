const { DataTypes } = require('sequelize');

module.exports = (sequelize) => sequelize.define('consultants', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.BLOB,
    title: DataTypes.STRING,
    descriptionshort: DataTypes.TEXT,
    price: DataTypes.FLOAT,
    description: DataTypes.TEXT,
    availability: DataTypes.STRING,
    webpage: DataTypes.STRING,
    phone: DataTypes.STRING,
    curricullum: DataTypes.BLOB,
    cedula: DataTypes.BLOB,
    address: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
});