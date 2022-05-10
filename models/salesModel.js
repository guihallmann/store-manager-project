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

module.exports = {
  getAll,
  getById,
};