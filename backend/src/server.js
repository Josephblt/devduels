require('dotenv').config();

const cors = require('cors');
const express = require('express');

const router = require('./routes');
const { sequelize } = require('./db/models');

const app = express();

app.use(cors({ origin: '*' }));

app.use(express.json());
app.use('*', router);

const PORT = process.env.BACKEND_PORT;

const startServer = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connected to the database successfully');
    app.listen(PORT, () => {
      console.log(`Server is running at http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Failed to connect to the database:', error.message);
  }
};

if (process.env.NODE_ENV !== 'production') {
  startServer();
}

module.exports = app;
