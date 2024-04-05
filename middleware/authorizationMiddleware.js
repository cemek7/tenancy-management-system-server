// middleware/authorizationMiddleware.js
exports.authorizeAdmin = (req, res, next) => {
  if (req.userRole !== 'admin') {
    return res.status(403).json({ message: 'Forbidden - Admin access required' });
  }
  next();
};

exports.authorizePropertyManagerOrLandlord = (req, res, next) => {
  if (req.userRole !== 'propertyManager' && req.userRole !== 'landlord') {
    return res.status(403).json({ message: 'Forbidden - Property Manager or Landlord access required' });
  }
  next();
};

exports.authorizeTenant = (req, res, next) => {
  if (req.userRole !== 'tenant') {
    return res.status(403).json({ message: 'Forbidden - Tenant access required' });
  }
  next();
};

// Other authorization-related middleware functions can be added here
