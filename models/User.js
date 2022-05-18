const { DataTypes, Sequelize } = require('sequelize');
const bcrypt = require('bcrypt');

module.exports = (sequelize) => {
const User = sequelize.define('users', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: DataTypes.STRING,
  lastmane: DataTypes.STRING,
  surname: DataTypes.STRING,
  type: DataTypes.STRING,
  email: DataTypes.STRING,
  password: DataTypes.STRING,
  telephone: DataTypes.NUMBER,
  celphone: DataTypes.NUMBER,
  createdAt: DataTypes.DATE,
  updatedAt: DataTypes.DATE,
}, 
{
    hooks: {
      beforeCreate: (user) => {
        const salt = bcrypt.genSaltSync();
        user.password = bcrypt.hashSync(user.password, salt);
      },
    },
  });
  
  User.prototype.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
  };

  return User;
};