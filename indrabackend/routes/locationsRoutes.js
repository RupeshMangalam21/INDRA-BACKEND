const express = require('express');
const Location = require('../models/Locations'); // Import the Location model

const router = express.Router();

// Create a new location
router.post('/', async (req, res) => {
  try {
    const { name, description, coordinates } = req.body;
    const location = new Location({ name, description, coordinates });
    await location.save();
    res.status(201).json(location);
  } catch (error) {
    console.error('Error creating location:', error);
    res.status(500).json({ error: 'Could not create location' });
  }
});

// Get all locations
router.get('/', async (req, res) => {
  try {
    const locations = await Location.find();
    res.json(locations);
  } catch (error) {
    console.error('Error fetching locations:', error);
    res.status(500).json({ error: 'Could not fetch locations' });
  }
});

// Get a location by ID
router.get('/:id', async (req, res) => {
  try {
    const location = await Location.findById(req.params.id);
    if (!location) {
      return res.status(404).json({ error: 'Location not found' });
    }
    res.json(location);
  } catch (error) {
    console.error('Error fetching location:', error);
    res.status(500).json({ error: 'Could not fetch location' });
  }
});

// Update a location by ID
router.put('/:id', async (req, res) => {
  try {
    const { name, description, coordinates } = req.body;
    const location = await Location.findByIdAndUpdate(
      req.params.id,
      { name, description, coordinates },
      { new: true } // Return the updated location
    );
    if (!location) {
      return res.status(404).json({ error: 'Location not found' });
    }
    res.json(location);
  } catch (error) {
    console.error('Error updating location:', error);
    res.status(500).json({ error: 'Could not update location' });
  }
});

// Delete a location by ID
router.delete('/:id', async (req, res) => {
  try {
    const location = await Location.findByIdAndRemove(req.params.id);
    if (!location) {
      return res.status(404).json({ error: 'Location not found' });
    }
    res.json({ message: 'Location deleted' });
  } catch (error) {
    console.error('Error deleting location:', error);
    res.status(500).json({ error: 'Could not delete location' });
  }
});

module.exports = router;
