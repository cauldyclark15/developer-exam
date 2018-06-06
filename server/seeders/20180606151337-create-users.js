import { User } from '../database/connectors';

module.exports = {
  up: async function(queryInterface, Sequelize) {
    await User.create({
      first_name: 'Jc',
      last_name: 'Cast',
      email: 'jcing.jc@gmail.com',
      password: '111111111',
    });
  },

  down: function(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('users', null, {});
  },
};
