const validateSale = (req, res, next) => {
  req.body.forEach((e) => {
    if (!e.productId) return res.status(400).json({ message: '"productId" is required' });
    if (!e.quantity) return res.status(400).json({ message: '"quantity" is required' });
    if (e.quantity <= 0) {
      return res.status(422).json({ message: '"quantity" must be greater than or equal to 1' });
    }
  });
  next();
};

module.exports = validateSale;