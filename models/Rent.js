// models/Rent.js

const mongoose = require('mongoose');

const rentSchema = new mongoose.Schema({
  tenant: { type: mongoose.Schema.Types.ObjectId, ref: 'Tenant', required: true },
  amount: { type: Number, required: true },
  dueDate: { type: Date, required: true },
  paid: { type: Boolean, default: false },
  paymentDate: { type: Date },
  // Other rent fields
});

module.exports = mongoose.model('Rent', rentSchema);
