import Sequelize from 'sequelize';
import uuid from 'uuid';
import db from '../database';

const eventModel = db.define(
  'event',
  {
    id: {
      type: Sequelize.UUID,
      defaultValue: uuid.v4,
      primaryKey: true,
    },
    user_id: Sequelize.UUID,
    description: Sequelize.STRING,
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE,
  },
  {
    paranoid: true,
    omitNull: true,
  },
);

export default eventModel;
