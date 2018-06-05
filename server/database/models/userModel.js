import Sequelize from 'sequelize';
import uuid from 'uuid';
import db from '../database';

const userModel = db.define(
  'user',
  {
    id: {
      type: Sequelize.UUID,
      defaultValue: uuid.v4,
      primaryKey: true,
    },
    first_name: Sequelize.STRING,
    last_name: Sequelize.STRING,
    email: Sequelize.STRING,
    password: Sequelize.STRING,
    created_date: Sequelize.DATE,
  },
  {
    paranoid: true,
    omitNull: true,
  },
);

export default userModel;
