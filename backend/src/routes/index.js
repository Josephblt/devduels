const express = require('express');
const router = express.Router();
const { sequelize } = require('../db/models');

router.get('/', async (req, res) => {
  try {
    await sequelize.authenticate();
    res.status(200).json({
      message: 'Welcome to the DevDuels API! Connected to the database successfully.',
    });
  } catch (error) {
    res.status(500).json({
      message: 'Welcome to the DevDuels API! Failed to connect to the database.',
      error: error.message,
    });
  }
});

router.all('*', (req, res) => {
  res.status(404).json({
    message: '* - Route not found (DEBUG)',
    path: req.originalUrl,
  });
});

module.exports = router;
