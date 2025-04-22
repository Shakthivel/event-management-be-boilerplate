'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('registration', {
      registration_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      event_id: {
        type: Sequelize.INTEGER,
        references: { model: 'event', key: 'event_id' }
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: { model: 'user', key: 'user_id' }
      },
      created_by: {
        type: Sequelize.INTEGER,
        references: { model: 'user', key: 'user_id' }
      },
      updated_by: {
        type: Sequelize.INTEGER,
        references: { model: 'user', key: 'user_id' }
      },
      created_at: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updated_at: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP')
      },
      is_deleted: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('registration');
  }
};
