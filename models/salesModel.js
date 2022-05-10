const connection = require('./connection');

const getAll = async () => {
  const query = 'SELECT * FROM sales';
  const [sales] = await connection.execute(query);
  return sales;
};

const getById = async (id) => {
  const query = 'SELECT * FROM sales WHERE sales.id = ?';
  const [sale] = await connection.execute(query, [id]);
  return sale;
};

module.exports = {
  getAll,
  getById,
};