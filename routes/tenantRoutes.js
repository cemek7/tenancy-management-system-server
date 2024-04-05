
// routes/tenantRoutes.js

const express = require('express');
const router = express.Router();
const tenantController = require('../controllers/tenantController');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/', authMiddleware.authenticate, tenantController.getTenants);
router.post('/', authMiddleware.authenticate, tenantController.addTenant);
router.get('/:id', authMiddleware.authenticate, tenantController.getTenantDetails);

// Other tenant-related routes (e.g., create tenant, update tenant, delete tenant) can be added here

module.exports = router;