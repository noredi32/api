'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        /**
         * Add altering commands here.
         *
         * Example:
         * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
         */
        await queryInterface.createTable('appointments', {
            id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
            userId: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'users',
                    key: 'id',
                },
                onDelete: 'CASCADE',
            },
            consultantId: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'consultants',
                    key: 'id',
                },
                onDelete: 'CASCADE',
            },
            day: Sequelize.DATE,
            schedule: Sequelize.TIME, 
            createdAt: Sequelize.DATE,
            updatedAt: Sequelize.DATE,
        });

    },

    async down(queryInterface, Sequelize) {
        /**
         * Add reverting commands here.
         *
         * Example:
         * await queryInterface.dropTable('users');
         */
        await queryInterface.dropTable('appointments');

    }
};