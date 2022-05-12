const express = require('express');

const router = express.Router();
const productsController = require('../controllers/productsController');
const salesController = require('../controllers/salesController');
const validateProduct = require('../middlewares/validateProducts');
// const validateSale = require('../middlewares/validateSales');

router.get('/products', productsController.getAll);
router.get('/products/:id', productsController.getById);

router.post('/products', validateProduct, productsController.create);
router.put('/products/:id', validateProduct, productsController.update);

router.get('/sales', salesController.getAll);
router.get('/sales/:id', salesController.getById);

// router.post('/sales', validateSale, salesController.create);

module.exports = router;