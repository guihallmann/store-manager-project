const salesService = require('../services/salesService');

const getAll = async (req, res) => {
  const sales = await salesService.getAll();
  if (sales) return res.status(200).json(sales);
  if (!sales) return res.status(404).json({ message: 'Sale not found' });
};

const getById = async (req, res) => {
  const { id } = req.params;
  const sale = await salesService.getById(id);
  if (!sale) return res.status(404).json({ message: 'Sale not found' });
  return res.status(200).json(sale);
};

const create = async (req, res) => {
  const saleArr = req.body;
  const sale = await salesService.create(saleArr);
  return res.status(201).json(sale);
};

const update = async (req, res) => {
  const { id } = req.params;
  const saleArr = req.body;
  const checkSale = await salesService.getById(id);
  if (!checkSale) return res.status(404).json({ message: 'Sale not found' });
  const updateSale = await salesService.update(id, saleArr);
  return res.status(200).json(updateSale);
};

module.exports = {
  getAll,
  getById,
  create,
  update,
};