const productsService = require('../services/productsService');

const getAll = async (req, res, next) => {
  try {
    const products = await productsService.getAll();
    return res.status(200).json(products);
  } catch (err) {
    next(err);
  }
};

const getById = async (req, res) => {
  const { id } = req.params;
  const product = await productsService.getById(id);
  if (!product) return res.status(404).json({ message: 'Product not found' });
  return res.status(200).json(product);
};

const create = async (req, res) => {
  const { name, quantity } = req.body;
  const checkName = await productsService.getByName(name);
  if (checkName) {
    const newProduct = await productsService.create(name, quantity);
    return res.status(201).json(newProduct);
  }
  if (!checkName) return res.status(409).json({ message: 'Product already exists' });
};

const update = async (req, res) => {
  const { id } = req.params;
  const { name, quantity } = req.body;
  const checkProduct = await productsService.getById(id);
  if (!checkProduct) return res.status(404).json({ message: 'Product not found' });
  if (checkProduct) {
    const updateProduct = await productsService.update(id, name, quantity);
    return res.status(200).json(updateProduct);
  }
};
module.exports = {
  getAll,
  getById,
  create,
  update,
};