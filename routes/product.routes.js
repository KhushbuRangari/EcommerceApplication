const express = require('express');
const productRouter = express.Router();
const {jwtVerify} = require('../middlewares/jwt.middleware');

let { productAPI, productAddAPI, updateproduct, deleteProduct, getProductDetailById ,getProductByCategory} = require('../controllers/product.controller');
productRouter.get('/info',jwtVerify, productAPI);
productRouter.post('/add',jwtVerify, productAddAPI);
productRouter.put('/api/:id',jwtVerify, updateproduct);
productRouter.delete('/api/:id',jwtVerify, deleteProduct);
productRouter.get('/api/getProduct',jwtVerify, getProductDetailById);
productRouter.get('/api/ByCategory',jwtVerify, getProductByCategory);
module.exports = productRouter;