'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('registration', [
      { event_id: 1, user_id: 1, created_by: 1, updated_by: 1 },  // Alice
      { event_id: 2, user_id: 2, created_by: 2, updated_by: 2 },  // Bob
      { event_id: 3, user_id: 3, created_by: 3, updated_by: 3 },  // Charlie
      { event_id: 4, user_id: 4, created_by: 4, updated_by: 4 },  // Diana
      { event_id: 5, user_id: 5, created_by: 5, updated_by: 5 },  // Eve
      { event_id: 6, user_id: 6, created_by: 6, updated_by: 6 },  // Frank
      { event_id: 3, user_id: 2, created_by: 2, updated_by: 2 },  // Bob
      { event_id: 4, user_id: 1, created_by: 1, updated_by: 1 },  // Alice
      { event_id: 5, user_id: 3, created_by: 3, updated_by: 3 },  // Charlie
      { event_id: 6, user_id: 4, created_by: 4, updated_by: 4 }   // Diana
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('registration', null, {});
  }
};
