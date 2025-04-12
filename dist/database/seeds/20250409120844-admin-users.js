"use strict";const bcryptjs = require('bcryptjs');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [{
      name: 'Cicero',
      email: 'cicerosduelis@gmail.com',
      password_hash: await bcryptjs.hash(process.env.ADMIN_USER_PASSWORD, 8),
      isAdmin: true,
      isActive: true,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      name: 'Cicero 2',
      email: 'cicero@testes.com',
      password_hash: await bcryptjs.hash('123456', 8),
      isAdmin: false,
      isActive: true,
      created_at: new Date(),
      updated_at: new Date(),
    }], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('users', null, {});
     */
  },
};
