const connection = require('./connection');

const getAll = async () => {
  const query = `SELECT sp.sale_id, s.date, sp.product_id, sp.quantity
  FROM sales_products as sp
  JOIN sales as s ON s.id = sp.sale_id`;
  const [sales] = await connection.execute(query);
  return sales;
};

const getById = async (id) => {
  const query = `SELECT s.date, sp.product_id, sp.quantity
  FROM sales as s
  JOIN sales_products as sp ON sp.sale_id = s.id
  WHERE sp.sale_id = ?`;
  const [sale] = await connection.execute(query, [id]);
  return sale;
};

const create = async () => {
  const query = 'INSERT INTO sales (date) VALUES (NOW())';
  const [{ insertId }] = await connection.execute(query);
  return insertId;
};

const saleProduct = async (saleId, productId, quantity) => {
  const query = 'INSERT INTO sales_products (sale_id, product_id, quantity) VALUES (?, ?, ?)';
  await connection.execute(query, [saleId, productId, quantity]);
};

module.exports = {
  getAll,
  getById,
  create,
  saleProduct,
};