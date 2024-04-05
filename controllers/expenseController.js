// controllers/expenseController.js

const Expense = require('../models/Expense');

exports.createExpense = async (req, res) => {
    try {
        const expense = new Expense(req.body);
        await expense.save();
        res.status(201).json(expense);
    } catch (error) {
        console.error('Error creating expense:', error);
        res.status(500).json({ error: error.message });
    }
};

exports.getAllExpenses = async (req, res) => {
    try {
        const expenses = await Expense.find();
        res.status(200).json(expenses);
    } catch (error) {
        console.error('Error fetching expenses:', error);
        res.status(500).json({ error: error.message });
    }
};

exports.getExpenseById = async (req, res) => {
    try {
        const expense = await Expense.findById(req.params.id);
        if (!expense) {
            return res.status(404).json({ error: 'Expense not found' });
        }
        res.status(200).json(expense);
    } catch (error) {
        console.error('Error fetching expense:', error);
        res.status(500).json({ error: error.message });
    }
};

exports.updateExpense = async (req, res) => {
    try {
        const expense = await Expense.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!expense) {
            return res.status(404).json({ error: 'Expense not found' });
        }
        res.status(200).json(expense);
    } catch (error) {
        console.error('Error updating expense:', error);
        res.status(500).json({ error: error.message });
    }
};

exports.deleteExpense = async (req, res) => {
    try {
        const expense = await Expense.findByIdAndDelete(req.params.id);
        if (!expense) {
            return res.status(404).json({ error: 'Expense not found' });
        }
        res.status(204).end();
    } catch (error) {
        console.error('Error deleting expense:', error);
        res.status(500).json({ error: error.message });
    }
};
