const express = require('express');
const categoryAddRouter = express.Router();
const {jwtVerify} = require('../middlewares/jwt.middleware');
let {categoryAdd,getcategoryData,updateCategory,deleteCategory,getcategoryDataById} = require('../controllers/category.controller');

categoryAddRouter.get('/allCategory',jwtVerify,getcategoryData);
categoryAddRouter.post('/add',jwtVerify,categoryAdd);
categoryAddRouter.put('/update/:id',jwtVerify,updateCategory);
categoryAddRouter.delete('/delete/:id',jwtVerify,deleteCategory);
categoryAddRouter.get('/getdata',jwtVerify,getcategoryDataById);

module.exports = categoryAddRouter;