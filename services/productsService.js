const productsModel = require('../models/productsModel');

const handleError = (status, message) => ({ status, message });

const getAll = async () => {
  const products = await productsModel.getAll();
  if (products.length === 0) {
    throw handleError(404, 'Product not found');
  }
  return products;
};

const getById = async (id) => {
  const product = await productsModel.getById(id);
  if (product.length === 0) {
    return false;
  }
  return product[0];
};

module.exports = {
  getAll,
  getById,
};