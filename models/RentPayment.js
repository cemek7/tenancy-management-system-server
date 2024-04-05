// models/RentPayment.js

const mongoose = require('mongoose');

const rentPaymentSchema = new mongoose.Schema({
    propertyId: { type: mongoose.Schema.Types.ObjectId, ref: 'Property', required: true },
    tenantId: { type: mongoose.Schema.Types.ObjectId, ref: 'Tenant', required: true },
    amount: { type: Number, required: true },
    paymentDate: { type: Date, default: Date.now },
});

module.exports = mongoose.model('RentPayment', rentPaymentSchema);
