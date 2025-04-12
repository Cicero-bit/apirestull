module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.renameColumn('files', 'create_at', 'created_at');
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.renameColumn('files', 'created_at', 'create_at');
  },
};
