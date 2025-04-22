'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('event', {
      event_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      event_name: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      description: Sequelize.TEXT,
      event_date_time: Sequelize.DATE,
      duration: Sequelize.INTEGER,
      location: Sequelize.STRING(100),
      thumbnail: Sequelize.STRING(255),
      category_id: {
        type: Sequelize.INTEGER,
        references: { model: 'event_category', key: 'category_id' }
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
    await queryInterface.dropTable('event');
  }
};
