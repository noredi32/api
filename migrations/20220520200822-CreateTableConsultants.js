'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */

    await queryInterface.createTable('consultants', {
      id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
      name: Sequelize.STRING,
      email: Sequelize.STRING,
      password: Sequelize.STRING,
      image: Sequelize.BLOB,
      title: Sequelize.STRING,
      descriptionshort: Sequelize.TEXT,
      price: Sequelize.FLOAT,
      description: Sequelize.TEXT,
      availability: Sequelize.STRING,
      webpage: Sequelize.STRING,
      phone: Sequelize.STRING,
      curricullum: Sequelize.BLOB,
      cedula: Sequelize.BLOB,
      address: Sequelize.STRING,
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    })



  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable('consultants');
  }
};
