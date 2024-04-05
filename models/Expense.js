// models/Expense.js

const mongoose = require('mongoose');

const expenseSchema = new mongoose.Schema({
  date: { type: Date, default: Date.now },
  category: { type: String, required: true },
  description: { type: String },
  amount: { type: Number, required: true },
  expenseDate: { type: Date, default: Date.now },
  propertyId: { type: mongoose.Schema.Types.ObjectId, ref: 'Property', required: true },
});

module.exports = mongoose.model('Expense', expenseSchema);
