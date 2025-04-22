const { Sequelize } = require('sequelize');
require('dotenv').config();
const { DatabaseConstants } = require('../constants/DatabaseConstants');

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
  }
);

const connect = async () => {
  try {
    await sequelize.authenticate();
    console.log(DatabaseConstants.ConnectionSuccessful);
  } catch (error) {
    console.error(DatabaseConstants.ConnectionFailed, error);
  }
};

connect();

module.exports = sequelize;
