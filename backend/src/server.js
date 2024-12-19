require('dotenv').config();
const express = require('express');
const routes = require('./routes');

const app = express();
app.use(express.json());

// Use routes
app.use('/api', routes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
