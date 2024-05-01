// controllers/artworkController.js
const Artwork = require('../models/Artwork');  # Import the Artwork model

// Get all artworks
const getAllArtworks = async (req, res) => {
  try {
    const artworks = await Artwork.find();  # Fetch all artworks from the database
    res.json(artworks);  # Return the artworks as JSON
  } catch (err) {
    res.status(500).json({ error: 'Error fetching artworks' });  # Error handling
  }
};

// Create a new artwork
const createArtwork = async (req, res) => {
  try {
    const newArtwork = new Artwork(req.body);  # Create a new artwork from request data
    await newArtwork.save();  # Save the artwork to the database
    res.json(newArtwork);  # Return the created artwork as JSON
  } catch (err) {
    res.status(500).json({ error: 'Error creating artwork' });  # Error handling
  }
};

// Update an existing artwork
const updateArtwork = async (req, res) => {
  try {
    const updatedArtwork = await Artwork.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }  # Return the updated document
    );
    res.json(updatedArtwork);  # Return the updated artwork
  } catch (err) {
    res.status(500).json({ error: 'Error updating artwork' });  # Error handling
  }
};

// Delete an artwork
const deleteArtwork = async (req, res) => {
  try {
    await Artwork.findByIdAndDelete(req.params.id);  # Delete the artwork
    res.json({ message: 'Artwork deleted' });  # Return a success message
  } catch (err) {
    res.status(500).json({ error: 'Error deleting artwork' });  # Error handling
  }
};

module.exports = {
  getAllArtworks,  # Export the controller functions
  createArtwork,
  updateArtwork,
  deleteArtwork,
};
