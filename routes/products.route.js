const { Router } = require('express');
const router = Router();
const { productsController } = require('../controllers/products.controllers')

router.get('/products', productsController.getProducts);
router.get('/products/:id', productsController.getProductsById);
router.post('/products', productsController.postProducts);
router.delete('/products', productsController.deleteProductsById)



module.exports = router;