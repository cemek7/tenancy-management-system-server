// controllers/financialController.js

const Rent = require('../models/Rent');
const Expense = require('../models/Expense');

exports.generateFinancialReports = async (req, res) => {
    try {
        // Calculate total income from rent payments
        const rents = await Rent.find();
        const totalRentIncome = rents.reduce((total, rent) => total + rent.amount, 0);

        // Calculate total expenses for maintenance
        const expenses = await Expense.find();
        const totalMaintenanceExpenses = expenses.reduce((total, expense) => {
            if (expense.category === 'maintenance') {
                return total + expense.amount;
            }
            return total;
        }, 0);

        // Calculate profit and loss
        const netProfitLoss = totalRentIncome - totalMaintenanceExpenses;

        // Generate balance sheet
        const balanceSheet = {
            assets: {
                totalRentIncome,
            },
            liabilities: {
                totalMaintenanceExpenses,
            },
            equity: {
                netProfitLoss,
            },
        };

        // Generate cash flow statement (assuming no other cash flows for simplicity)
        const cashFlowStatement = {
            income: totalRentIncome,
            expenses: totalMaintenanceExpenses,
            netCashFlow: totalRentIncome - totalMaintenanceExpenses,
        };

        const reports = {
            profitAndLoss: { netProfitLoss },
            balanceSheet,
            cashFlow: cashFlowStatement,
        };
        
        res.status(200).json(reports);
    } catch (error) {
        console.error('Error generating financial reports:', error);
        res.status(500).json({ error: error.message });
    }
};
