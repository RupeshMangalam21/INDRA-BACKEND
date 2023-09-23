const mongoose = require('mongoose');

// Define the Prediction schema
const predictionsSchema = new mongoose.Schema({
  location: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Locations', // Reference to the Location model
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
  probability: {
    type: Number,
    required: true,
    min: 0,
    max: 1,
  },
  weatherCondition: {
    type: String,
    enum: ['Sunny', 'Cloudy', 'Rainy', 'Stormy', 'Unknown'],
    default: 'Unknown',
  },
  // Add more fields as needed for prediction data
});

// Create the Prediction model
const Predictions = mongoose.model('Predictions', predictionsSchema);

module.exports = Predictions;
