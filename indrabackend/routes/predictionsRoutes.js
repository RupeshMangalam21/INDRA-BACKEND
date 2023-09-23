const express = require('express');
const Prediction = require('../models/Predictions'); // Import the Prediction model

const router = express.Router();

// Create a new prediction
router.post('/', async (req, res) => {
  try {
    const { location, timestamp, probability } = req.body;
    const prediction = new Prediction({ location, timestamp, probability });
    await prediction.save();
    res.status(201).json(prediction);
  } catch (error) {
    console.error('Error creating prediction:', error);
    res.status(500).json({ error: 'Could not create prediction' });
  }
});

// Get all predictions
router.get('/', async (req, res) => {
  try {
    const predictions = await Prediction.find();
    res.json(predictions);
  } catch (error) {
    console.error('Error fetching predictions:', error);
    res.status(500).json({ error: 'Could not fetch predictions' });
  }
});

// Get a prediction by ID
router.get('/:id', async (req, res) => {
  try {
    const prediction = await Prediction.findById(req.params.id);
    if (!prediction) {
      return res.status(404).json({ error: 'Prediction not found' });
    }
    res.json(prediction);
  } catch (error) {
    console.error('Error fetching prediction:', error);
    res.status(500).json({ error: 'Could not fetch prediction' });
  }
});

// Update a prediction by ID
router.put('/:id', async (req, res) => {
  try {
    const { location, timestamp, probability } = req.body;
    const prediction = await Prediction.findByIdAndUpdate(
      req.params.id,
      { location, timestamp, probability },
      { new: true } // Return the updated prediction
    );
    if (!prediction) {
      return res.status(404).json({ error: 'Prediction not found' });
    }
    res.json(prediction);
  } catch (error) {
    console.error('Error updating prediction:', error);
    res.status(500).json({ error: 'Could not update prediction' });
  }
});

// Delete a prediction by ID
router.delete('/:id', async (req, res) => {
  try {
    const prediction = await Prediction.findByIdAndRemove(req.params.id);
    if (!prediction) {
      return res.status(404).json({ error: 'Prediction not found' });
    }
    res.json({ message: 'Prediction deleted' });
  } catch (error) {
    console.error('Error deleting prediction:', error);
    res.status(500).json({ error: 'Could not delete prediction' });
  }
});

module.exports = router;