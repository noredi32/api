'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        /**
         * Add altering commands here.
         *
         * Example:
         * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
         */

        await queryInterface.createTable('reviews', {
            id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
            content: Sequelize.TEXT,
            consultantId: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'consultants',
                    key: 'id',
                },
                onDelete: 'CASCADE',
            },
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