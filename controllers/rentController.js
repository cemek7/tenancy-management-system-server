const Rent = require('../models/rent');

exports.createRentPayment = async (req, res) => {
    try {
        // Extract rent payment details from request body
        const { tenantId, propertyId, amount, date } = req.body;

        // Save rent payment details to database (assuming Rent model exists)
        const rentPayment = new Rent({
            tenantId,
            propertyId,
            amount,
            date
        });
        await rentPayment.save();

        // Generate receipt (you can use a template engine or format it as JSON)
        const receipt = {
            tenantId,
            propertyId,
            amount,
            date,
            // Other receipt details
        };

        // Send receipt (response could be JSON, HTML, or an attachment)
        res.status(200).json({ receipt });
    } catch (error) {
        console.error('Error creating rent payment:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};
