const Joi = require('joi');

const PRODUCT = Joi.object({
  name: Joi.string().min(5).max().required,
  quantity: Joi.number.min(1).required,
});

const validateProduct = (req, res, next) => {
  const { name, quantity } = req.body;
  const { error } = PRODUCT.validate({ name, quantity });
  if (error) console.log(error);
  next();
};

module.exports = validateProduct;