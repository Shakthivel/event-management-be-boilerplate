'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('role', [
      {
        role_name: 'Admin'
      },
      {
        role_name: 'User'
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('role', null, {});
  }
};
