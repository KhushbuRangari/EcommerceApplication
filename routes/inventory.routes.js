const express = require('express');
const InventoryRouter =express.Router();
const {jwtVerify} = require('../middlewares/jwt.middleware');

let{AllInventory,inventoryAdd,updateinventory,deleteinventory,getinventoryDetailById} = require('../controllers/inventory.controller');


InventoryRouter.get('/info', jwtVerify,AllInventory);

InventoryRouter.post('/add',jwtVerify, inventoryAdd);


 InventoryRouter.put('/update/:id', jwtVerify,updateinventory);
InventoryRouter.delete('/delete/:id',jwtVerify, deleteinventory);
 InventoryRouter.get('/getById',jwtVerify, getinventoryDetailById);
module.exports = InventoryRouter;