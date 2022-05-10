const salesService = require('../services/salesService');

const getAll = async (req, res, next) => {
  try {
    const sales = await salesService.getAll();
    return res.status(200).json(sales);
  } catch (err) {
    next(err);
  }
};

const getById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const sale = await salesService.getById(id);
    return res.status(200).json(sale);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getAll,
  getById,
};