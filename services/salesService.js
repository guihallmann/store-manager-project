const salesModel = require('../models/salesModel');

const getAll = async () => {
  const sales = await salesModel.getAll();
  if (sales.length === 0) {
    return false;
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

const create = async (sale) => {
  const newSaleId = await salesModel.create();
  await Promise.all(sale.map((e) => salesModel.saleProduct(newSaleId, e.productId, e.quantity)));
  return { id: newSaleId, itemsSold: sale };
};

const update = async (id, saleArr) => {
  await Promise.all(saleArr.map((e) => salesModel.update(id, e.productId, e.quantity)));
  return { saleId: id, itemUpdated: saleArr };
};

module.exports = {
  getAll,
  getById,
  create,
  update,
};