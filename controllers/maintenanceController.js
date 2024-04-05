// controllers/maintenanceController.js

const MaintenanceRequest = require('../models/MaintenanceRequest');
const Tenant = require('../models/Tenant');
const Property = require('../models/Property');

exports.submitMaintenanceRequest = async (req, res) => {
    try {
        const { tenantId, propertyId, description } = req.body;

        // Check if the tenant exists
        const tenant = await Tenant.findById(tenantId);
        if (!tenant) {
            return res.status(404).json({ error: 'Tenant not found' });
        }

        // Check if the property exists
        const property = await Property.findById(propertyId);
        if (!property) {
            return res.status(404).json({ error: 'Property not found' });
        }

        // Create a new maintenance request
        const maintenanceRequest = new MaintenanceRequest({
            tenantId,
            propertyId,
            description,
            status: 'Pending',
        });
        await maintenanceRequest.save();

        res.status(201).json(maintenanceRequest);
    } catch (error) {
        console.error('Error submitting maintenance request:', error);
        res.status(500).json({ error: error.message });
    }
};

exports.getMaintenanceRequests = async (req, res) => {
    try {
        // Query maintenance requests
        const maintenanceRequests = await MaintenanceRequest.find();
        res.status(200).json(maintenanceRequests);
    } catch (error) {
        console.error('Error fetching maintenance requests:', error);
        res.status(500).json({ error: error.message });
    }
};

exports.updateMaintenanceRequestStatus = async (req, res) => {
    try {
        const { id } = req.params;
        const { status } = req.body;

        // Update maintenance request status
        const maintenanceRequest = await MaintenanceRequest.findByIdAndUpdate(id, { status }, { new: true });
        if (!maintenanceRequest) {
            return res.status(404).json({ error: 'Maintenance request not found' });
        }

        res.status(200).json(maintenanceRequest);
    } catch (error) {
        console.error('Error updating maintenance request status:', error);
        res.status(500).json({ error: error.message });
    }
};
