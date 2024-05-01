// models/Artwork.js
const mongoose = require('mongoose');

const artworkSchema = new mongoose.Schema({
  title: { type: String, required: true },
  artist: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
  description: String
});

module.exports = mongoose.model('Artwork', artworkSchema);
