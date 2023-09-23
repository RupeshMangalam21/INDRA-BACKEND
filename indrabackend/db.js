// db.js
const { MongoClient } = require('mongodb');
require('dotenv').config(); // Load environment variables

const uri = process.env.MONGODB_URI; // Use an environment variable for the URI
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function connectToDatabase() {
  let retries = 3; // Number of retries
  while (retries > 0) {
    try {
      await client.connect();
      console.log('Connected to the database');
      return client.db(); // Return the database instance
    } catch (error) {
      console.error('Error connecting to the database:', error);
      retries--; // Decrement the number of retries
      if (retries === 0) {
        throw error; // Throw the error if no more retries are left
      } else {
        console.log(`Retrying connection... (${retries} retries left)`);
        await new Promise((resolve) => setTimeout(resolve, 5000)); // Wait for 5 seconds before retrying
      }
    }
  }
}

module.exports = { connectToDatabase };
