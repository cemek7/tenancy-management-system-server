// routes/propertyRoutes.js

const express = require('express');
const router = express.Router();
const propertyController = require('../controllers/propertyController');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/', authMiddleware.authenticate, propertyController.getProperties);
router.post('/', authMiddleware.authenticate, propertyController.addProperty);
router.get('/:id', authMiddleware.authenticate, propertyController.getPropertyDetails);

// Other property-related routes (e.g., create property, update property, delete property) can be added here

module.exports = router;