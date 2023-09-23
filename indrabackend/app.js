const express = require('express');
const { connectToDatabase } = require('./db');
const locationRoutes = require('./routes/locationsRoutes');
const predictionRoutes = require('./routes/predictionsRoutes');
const cors = require('cors'); // Import the CORS middleware

const app = express();
const port = process.env.PORT || 3000;

async function startServer() {
  try {
    await connectToDatabase();
    
    // Middleware
    app.use(cors()); // Add the CORS middleware
    app.use(express.json());

    // Routes
    app.use('/api/locations', locationRoutes);
    app.use('/api/predictions', predictionRoutes);

    const server = app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });

    // Graceful shutdown
    process.on('SIGTERM', () => {
      console.log('Received SIGTERM. Closing server gracefully.');
      server.close(() => {
        console.log('Server closed.');
      });
    });
  } catch (error) {
    console.error('Error starting the server:', error);
  }
}

startServer();
