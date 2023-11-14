const express = require('express')

const UserRouter = express.Router();
const {jwtVerify,isAdmin} = require('../middlewares/jwt.middleware')

const {register,login,getAllUser} = require('../controllers/user.controller');
// const jwtVerify = require('../middlewares/jwt.middleware');

UserRouter.post('/register',register);
UserRouter.post('/login',login);
UserRouter.get('/allUsers',jwtVerify,getAllUser);

//Protected User  Route auth
UserRouter.get('/use-auth',jwtVerify,(req,res)=>{
       return res.status(200).send({
            ok:true
        })
})

//Protected Route admin
UserRouter.get('/admin-auth',jwtVerify,isAdmin,(req,res)=>{
    return res.status(200).send({
         ok:true
     })
})

module.exports = UserRouter;