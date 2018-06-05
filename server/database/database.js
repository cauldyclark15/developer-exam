/* eslint no-console: "off" */

import Sequelize from 'sequelize';
import chalk from 'chalk';

const {
  DB_HOST,
  DB_DATABASE,
  DB_USERNAME,
  DB_PASSWORD,
  DB_PORT,
  DB_DATABASE_TEST,
  NODE_ENV,
} = process.env;

const isTestEnvironment = NODE_ENV === 'test';

const db = new Sequelize(
  `${isTestEnvironment ? DB_DATABASE_TEST : DB_DATABASE}`,
  `${DB_USERNAME}`,
  `${DB_PASSWORD}`,
  {
    host: `${DB_HOST}`,
    port: `${DB_PORT}`,
    dialect: 'mysql',
    pool: {
      max: 5,
      min: 0,
      idle: 10000,
    },
    charset: 'latin1',
    collate: 'latin1_bin',

    define: {
      charset: 'latin1',
      collate: 'latin1_bin',
    },

    logging: query => {
      if (process.env.NODE_ENV !== 'test') {
        const queryRunning = 'Executing (default):';
        console.log(
          query.replace(queryRunning, chalk.black.bgYellow.bold(queryRunning)),
        );
      }
    },
  },
);

export default db;
