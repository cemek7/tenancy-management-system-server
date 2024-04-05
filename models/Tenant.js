// Defines the schema for tenants stored in the MongoDB database

const mongoose = require('mongoose');

const tenantSchema = new mongoose.Schema({
  // Tenant schema fields
  name: { type: String, required: true },
  email: { type: String, required: true },
  // Other tenant fields
});

module.exports = mongoose.model('Tenant', tenantSchema);
