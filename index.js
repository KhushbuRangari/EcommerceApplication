 var cors = require('cors');


const express = require('express');
const mongoose = require('mongoose');


const morgan = require('morgan');  //keeps the log
require('dotenv').config(); //which cannot be leaked to public
const Port = process.env.Port;
const app = express();
app.use(express.json());
//  app.use(cors);
const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200
}
app.use(cors(corsOptions));
const connectDB = require('./connection');
connectDB();

// app.use(express.static('views')); 


const categoryRouter = require('./routes/category.routes');
app.use('/category', categoryRouter);

const productRouter = require('./routes/product.routes');
app.use('/product', productRouter);

const InventoryRouter = require('./routes/inventory.routes');
app.use('/inventory', InventoryRouter);

const UserRouter = require('./routes/user.route')
app.use('/auth', UserRouter)

app.use('*', (req, res,next) => {
   // res.send("Route dose not exist or not providing cotrrect request");

   const err = new Error(`Route dose not exist or not providing correct request ${req.url}`);
   err.status = 400;
   next(err);

})     //* for catch all routes (* is a wild card charcter)

//How to create custom error handler
//we are creating custom middle ware for handling the errors

app.use('*', (err, req, res, next) => {
   if (!err) {
      next();
   }

   console.log(err);
   res.status(400).json({
      // error: err.stack
      error: err.message

   })
})



app.listen(Port, () => {
   console.log(`server is Running on port ${Port}`);
})