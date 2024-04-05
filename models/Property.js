// Defines the schema for properties stored in the MongoDB database

const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema({
  // Property schema fields
  name: { type: String, required: true },
  address: { type: String, required: true },
  rent: { type: Number, required: true },
  // Other property fields
});

module.exports = mongoose.model('Property', propertySchema);
