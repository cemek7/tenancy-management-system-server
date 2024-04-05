// controllers/reportingController.js

const Property = require('../models/Property');
const Tenant = require('../models/Tenant');
const Rent = require('../models/Rent');
const Expense = require('../models/Expense');

exports.generatePropertyPerformanceReport = async (req, res) => {
    try {
        // Query properties and calculate occupancy rates
        const properties = await Property.find();
        const propertyPerformanceData = properties.map(property => {
            // Calculate occupancy rate for each property
            const totalUnits = property.totalUnits;
            const occupiedUnits = property.tenants.length;
            const occupancyRate = (occupiedUnits / totalUnits) * 100;

            return {
                propertyId: property._id,
                propertyName: property.name,
                occupancyRate,
            };
        });

        res.status(200).json(propertyPerformanceData);
    } catch (error) {
        console.error('Error generating property performance report:', error);
        res.status(500).json({ error: error.message });
    }
};

exports.generateFinancialAnalytics = async (req, res) => {
    try {
        // Query rents and expenses
        const rents = await Rent.find();
        const totalRentIncome = rents.reduce((total, rent) => total + rent.amount, 0);

        const expenses = await Expense.find();
        const totalExpenses = expenses.reduce((total, expense) => total + expense.amount, 0);

        // Calculate profit and loss
        const netProfitLoss = totalRentIncome - totalExpenses;

        res.status(200).json({
            totalRentIncome,
            totalExpenses,
            netProfitLoss,
        });
    } catch (error) {
        console.error('Error generating financial analytics:', error);
        res.status(500).json({ error: error.message });
    }
};
