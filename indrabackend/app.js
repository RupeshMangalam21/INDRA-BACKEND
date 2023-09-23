const express = require('express');
const { connectToDatabase } = require('./db'); // Import the database connection function
const Location = require('./models/Locations'); // Import the Location model
const Prediction = require('./models/Predictions'); // Import the Prediction model

const app = express();

const port = process.env.PORT || 3000;

async function startServer() {
  try {
    const db = await connectToDatabase(); // Establish the database connection
    
    app.use(express.json()); // Enable JSON request body parsing

    // Mount location routes
    const locationRoutes = require('./routes/locationRoutes');
    app.use('/api/locations', locationRoutes);

    // Mount prediction routes
    const predictionRoutes = require('./routes/predictionRoutes');
    app.use('/api/predictions', predictionRoutes);

    // Start the Express server
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.error('Error starting the server:', error);
  }
}

startServer();
