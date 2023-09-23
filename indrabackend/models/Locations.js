const mongoose = require('mongoose');

// Define the Location schema
const locationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true, // Remove leading/trailing white spaces
  },
  description: {
    type: String,
    default: '',
  },
  coordinates: {
    type: {
      type: String,
      enum: ['Point'], // GeoJSON type for point coordinates
      required: true,
    },
    coordinates: {
      type: [Number], // Longitude and latitude array
      required: true,
    },
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Create the Location model
const Location = mongoose.model('Location', locationSchema);

module.exports = Location;
