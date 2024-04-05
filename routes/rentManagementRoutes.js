const express = require('express');
const router = express.Router();
const RentController = require('../controllers/rentController');

// Route to handle rent payment creation and receipt generation
router.post('/payments', RentController.createRentPayment);

module.exports = router;
