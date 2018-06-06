import uuid from 'uuid';

module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('events', {
      id: {
        type: Sequelize.UUID,
        defaultValue: uuid.v4,
        primaryKey: true,
      },
      user_id: Sequelize.UUID,
      description: Sequelize.STRING,
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
      deletedAt: {
        type: Sequelize.DATE,
        defaultValue: null,
      },
    });
  },

  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('events');
  },
};
