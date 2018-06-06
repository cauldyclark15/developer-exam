import uuid from 'uuid';

module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('users', {
      id: {
        type: Sequelize.UUID,
        defaultValue: uuid.v4,
        primaryKey: true,
      },
      first_name: Sequelize.STRING,
      last_name: Sequelize.STRING,
      email: Sequelize.STRING,
      password: Sequelize.STRING,
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
      deletedAt: {
        type: Sequelize.DATE,
        defaultValue: null,
      },
    });
  },

  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('users');
  },
};
