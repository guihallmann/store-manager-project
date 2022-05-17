const handleError = (status, message) => ({ status, message }); 

const validateId = (req, res, next) => {
  try {
    req.body.forEach((e) => {
      if (!e.productId) throw handleError(400, '"productId" is required');
    });
    next();
  } catch (err) {
    return res.status(err.status).json({ message: err.message });
  }
};

const validateQuantity = (req, res, next) => {
  try {
    req.body.forEach((e) => {
      if (e.quantity <= 0) throw handleError(422, '"quantity" must be greater than or equal to 1');
      if (!e.quantity) throw handleError(400, '"quantity" is required');
    });
    next();
  } catch (err) {
    return res.status(err.status).json({ message: err.message });
  }
};

module.exports = { validateId, validateQuantity };