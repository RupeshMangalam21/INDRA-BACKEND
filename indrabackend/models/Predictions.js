const mongoose = require('mongoose');

// Define the Prediction schema
const predictionSchema = new mongoose.Schema({
  location: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Location', // Reference to the Location model
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
const Prediction = mongoose.model('Prediction', predictionSchema);

module.exports = Prediction;
