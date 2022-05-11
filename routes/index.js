const express = require('express');

const router = express.Router();
const productsController = require('../controllers/productsController');
const salesController = require('../controllers/salesController');
const validateProduct = require('../middlewares/validateProducts');

router.get('/products', productsController.getAll);
router.get('/products/:id', productsController.getById);

router.post('/products', validateProduct, productsController.create);

router.get('/sales', salesController.getAll);
router.get('/sales/:id', salesController.getById);

module.exports = router;