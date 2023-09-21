// app.js
const express = require('express');
const { connectToDatabase } = require('./db'); // Import the database connection function

const app = express();

const port = process.env.PORT || 3000;

async function startServer() {
  try {
    const db = await connectToDatabase(); // Establish the database connection

    // Define routes and application logic here!!! (UJALA)
    
    app.get('/', (req, res) => {
      res.send('Hello, world!');
    });

    // Start the Express server
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.error('Error starting the server:', error);
  }
}

startServer();
