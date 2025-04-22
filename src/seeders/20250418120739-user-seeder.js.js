'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('user', [
      { username: 'Alice', email: 'alice@example.com', password: 'hashed_password_1', role_id: 2, created_by: 'system' },
      { username: 'Bob', email: 'bob@example.com', password: 'hashed_password_2', role_id: 1, created_by: 'system' },
      { username: 'Charlie', email: 'charlie@example.com', password: 'hashed_password_3', role_id: 2, created_by: 'system' },
      { username: 'Diana', email: 'diana@example.com', password: 'hashed_password_4', role_id: 2, created_by: 'system' },
      { username: 'Eve', email: 'eve@example.com', password: 'hashed_password_5', role_id: 2, created_by: 'system' },
      { username: 'Frank', email: 'frank@example.com', password: 'hashed_password_6', role_id: 2, created_by: 'system' }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('user', null, {});
  }
};
