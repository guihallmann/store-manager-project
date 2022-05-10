const salesService = require('../services/salesService');

const getAll = async (req, res, next) => {
  try {
    const sales = await salesService.getAll();
    return res.status(200).json(sales);
  } catch (err) {
    next(err);
  }
};

const getById = async (req, res) => {
  const { id } = req.params;
  const sale = await salesService.getById(id);
  if (!sale) return res.status(404).json({ message: 'Sale not found' });
  return res.status(200).json(sale);
};

module.exports = {
  getAll,
  getById,
};