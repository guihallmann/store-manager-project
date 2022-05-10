const salesModel = require('../models/salesModel');

const handleError = (status, message) => ({ status, message });

const getAll = async () => {
  const sales = await salesModel.getAll();
  if (sales.length === 0) {
    throw handleError(404, 'Sales not found');
  }

  const formatSales = sales.map((sale) => ({
    saleId: sale.sale_id,
    date: sale.date,
    productId: sale.product_id,
    quantity: sale.quantity,
  }));
  
  return formatSales;
};

const getById = async (id) => {
  const sales = await salesModel.getById(id);
  if (sales.length === 0) {
    return false;    
  }

  const formatSale = sales.map((sale) => ({
    date: sale.date,
    productId: sale.product_id,
    quantity: sale.quantity,
  }));

  return formatSale;
};

module.exports = {
  getAll,
  getById,
};