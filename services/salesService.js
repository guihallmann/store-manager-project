const salesModel = require('../models/salesModel');

const getAll = async () => {
  const sales = await salesModel.getAll();
  if (!sales) {
    const erro = { status: 404, message: 'Sales not found' };
    throw erro;
  }
  return sales;
};

const getById = async (id) => {
  const sale = await salesModel.getById(id);
  if (!sale) {
    const erro = { status: 404, message: 'Sales not found' };
    throw erro;    
  }
  return sale;
};

module.exports = {
  getAll,
  getById,
};