require('dotenv').config();

const { Sequelize } = require('sequelize');
const config = require('../config');

const env = process.env.BACKEND_ENVIRONMENT;

const sequelize = new Sequelize(
  config[env].database_name,
  config[env].database_user,
  config[env].database_password,
  {
    host: config[env].database_host,
    port: config[env].database_port,
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  }
);

module.exports = { sequelize };
