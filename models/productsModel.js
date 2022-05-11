const connection = require('./connection');

const getAll = async () => {
  const query = 'SELECT * FROM products';
  const [products] = await connection.execute(query);
  return products;
};

const getById = async (id) => {
  const query = 'SELECT * FROM products WHERE id = ?';
  const [product] = await connection.execute(query, [id]);
  return product;
};

const getByName = async (name) => {
  const query = 'SELECT * FROM products WHERE name = ?';
  const [product] = await connection.execute(query, [name]);
  return product;
};

const create = async (name, quantity) => {
  const query = 'INSERT INTO products (name, quantity) VALUES (?, ?)';
  const [productId] = await connection.execute(query, [name, quantity]);
  const product = {
    id: productId.insertId,
    name,
    quantity,
  };
  return product;
};

module.exports = {
  getAll,
  getById,
  getByName,
  create,
};