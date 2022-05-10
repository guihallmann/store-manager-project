const connection = require('./connection');

const getAll = async () => {
  const query = 'SELECT * FROM products';
  const [products] = await connection.execute(query);
  return products;
};

const getById = async (id) => {
  const query = 'SELECT * FROM products WHERE products.id = ?';
  const [product] = await connection.execute(query, [id]);
  return product;
};

module.exports = {
  getAll,
  getById,
};