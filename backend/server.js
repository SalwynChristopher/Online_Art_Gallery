// Load environment variables from .env
require('dotenv').config();

// Import necessary modules
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const middleware = require('./middleware');  // Error handling middleware

// Create Express app
const app = express();

// Apply middleware
app.use(cors());  // Enable Cross-Origin Resource Sharing
app.use(express.json());  // Parse incoming JSON requests

// Example test route
app.get('/api/test', (req, res) => {
  res.send('Server is running');
});

// Apply error handling middleware
middleware(app);  //
