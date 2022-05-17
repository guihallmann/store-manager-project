const express = require('express');

const router = express.Router();
const productsController = require('../controllers/productsController');
const salesController = require('../controllers/salesController');
const validateProduct = require('../middlewares/validateProducts');
const { validateId, validateQuantity } = require('../middlewares/validateSales');

router.get('/products', productsController.getAll);
router.get('/products/:id', productsController.getById);

router.post('/products', validateProduct, productsController.create);

router.put('/products/:id', validateProduct, productsController.update);

router.delete('/products/:id', productsController.remove);

router.get('/sales', salesController.getAll);
router.get('/sales/:id', salesController.getById);

router.post('/sales', validateId, validateQuantity, salesController.create);

router.put('/sales/:id', validateId, validateQuantity, salesController.update);

module.exports = router;