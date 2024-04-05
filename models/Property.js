// Defines the schema for properties stored in the MongoDB database

const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema({
  // Property schema fields
  name: { type: String, required: true },
  address: { type: String, required: true },
  description: { type: String },
  rentAmount: { type: Number, required: true },
  amenities: { type: [String] },
  documents: { type: [String] }, // Store file references here
  availability: { type: Boolean, default: true }, // true for available, false for occupied
  // Other property fields
});

module.exports = mongoose.model('Property', propertySchema);
