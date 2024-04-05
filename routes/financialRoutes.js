// routes/financialRoutes.js

const express = require('express');
const router = express.Router();
const financialController = require('../controllers/financialController');

router.get('/reports', financialController.generateFinancialReports);

module.exports = router;
