// routes/artworks.js
const express = require('express');
const artworkController = require('../controllers/artworkController');  # Import the controller

const router = express.Router();

// Define routes and link to controller functions
router.get('/', artworkController.getAllArtworks); // # Get all artworks
router.post('/', artworkController.createArtwork);  //# Create a new artwork
router.put('/:id', artworkController.updateArtwork);  //# Update an artwork
router.delete('/:id', artworkController.deleteArtwork); // # Delete an artwork

module.exports = router; // # Export the router
