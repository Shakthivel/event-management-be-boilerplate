'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('event_category', [
      { category_type: 'Webinar' },
      { category_type: 'Workshop' },
      { category_type: 'Seminar' },
      { category_type: 'Conference' }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('event_category', null, {});
  }
};
