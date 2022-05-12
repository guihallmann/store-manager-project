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

const getByName = async (name) => {
  const product = await productsModel.getByName(name);
  if (product.length !== 0) {
    return false;
  }
  return true;
};

const create = async (name, quantity) => {
  const newProduct = await productsModel.create(name, quantity);
  return newProduct;
};

const update = async (id, name, quantity) => {
  const updateProduct = await productsModel.update(id, name, quantity);
  return updateProduct;
};

module.exports = {
  getAll,
  getById,
  getByName,
  create,
  update,
};