const productsModel = require('../models/productsModel');

const getAll = async () => {
  const products = await productsModel.getAll();
  if (!products) {
    const erro = { status: 404, message: 'Products not found' };
    throw erro;
  }
  return products;
};

const getById = async (id) => {
  const product = await productsModel.getById(id);
  if (!product) {
    const erro = { status: 404, message: 'Product not found' };
    throw erro;
  }
};

module.exports = {
  getAll,
  getById,
};