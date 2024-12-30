require('dotenv').config();

module.exports = {
  development: {
    database_host: process.env.LOCAL_DATABASE_HOST,
    database_port: process.env.LOCAL_DATABASE_PORT,
    database_name: process.env.LOCAL_DATABASE_NAME,
    database_user: process.env.LOCAL_DATABASE_USER,
    database_password: process.env.LOCAL_DATABASE_PASSWORD,
  },
  production: {
    database_host: process.env.AWS_DATABASE_HOST,
    database_port: process.env.AWS_DATABASE_PORT,
    database_name: process.env.AWS_DATABASE_NAME,
    database_user: process.env.AWS_DATABASE_USER,
    database_password: process.env.AWS_DATABASE_PASSWORD,
  },
};
