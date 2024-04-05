// controllers/notificationController.js

const nodemailer = require('nodemailer');

// Function to send email notification
const sendEmail = async (to, subject, text) => {
    try {
        const transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: 'your-email@gmail.com', // Your Gmail email address
                pass: 'your-password', // Your Gmail password or app-specific password
            },
        });

        const mailOptions = {
            from: 'your-email@gmail.com', // Sender email address
            to,
            subject,
            text,
        };

        await transporter.sendMail(mailOptions);
        console.log('Email notification sent successfully');
    } catch (error) {
        console.error('Error sending email notification:', error);
    }
};

// Function to send lease renewal notification
exports.sendLeaseRenewalNotification = async (tenantEmail) => {
    const subject = 'Lease Renewal Reminder';
    const text = 'Dear tenant, your lease is due for renewal soon. Please contact us for further details.';
    await sendEmail(tenantEmail, subject, text);
};

// Function to send rent due date reminder
exports.sendRentDueReminder = async (tenantEmail) => {
    const subject = 'Rent Due Reminder';
    const text = 'Dear tenant, this is a reminder that your rent payment is due soon. Please ensure timely payment.';
    await sendEmail(tenantEmail, subject, text);
};

// Function to send maintenance schedule notification
exports.sendMaintenanceScheduleNotification = async (recipientEmail, maintenanceType) => {
    const subject = 'Maintenance Schedule Notification';
    const text = `Dear recipient, a ${maintenanceType} maintenance is scheduled for your property. Please make necessary arrangements.`;
    await sendEmail(recipientEmail, subject, text);
};
