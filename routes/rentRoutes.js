// routes/rentRoutes.js

const express = require('express');
const router = express.Router();
const Rent = require('../models/Rent');

// Get all rents
router.get('/', async (req, res) => {
  try {
    const rents = await Rent.find();
    res.json(rents);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a new rent
router.post('/', async (req, res) => {
  const rent = new Rent({
    tenant: req.body.tenant,
    amount: req.body.amount,
    dueDate: req.body.dueDate,
    // Add other rent fields here
  });

  try {
    const newRent = await rent.save();
    res.status(201).json(newRent);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Record rent payment
router.patch('/:id/pay', async (req, res) => {
  try {
    const rent = await Rent.findById(req.params.id);
    if (!rent) {
      return res.status(404).json({ message: 'Rent not found' });
    }
    rent.paid = true;
    rent.paymentDate = new Date();
    await rent.save();
    res.json(rent);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Other rent management routes can be added here

module.exports = router;
