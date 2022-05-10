const productsService = require('../services/productsService');

const getAll = async (req, res, next) => {
  try {
    const products = await productsService.getAll();
    return res.status(200).json(products);
  } catch (err) {
    next(err);
  }
};

const getById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await productsService.getById(id);
    return res.status(200).json(product);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getAll,
  getById,
};