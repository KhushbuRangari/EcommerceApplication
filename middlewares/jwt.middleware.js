const jwt = require('jsonwebtoken');
const userModel = require('../models/user.model.js');

async function jwtVerify(req,res,next){
//some sort of logic which checks our token coming from client
// if token is valid , we pass the control to next controller or middleware
// if tikn is invalid , we send a res to client 
let token;
try {
    // console.log(req.headers.authorization,"token coming from here");
if(req.headers && req.headers.authorization){
    //bearer token keyword
    
    // console.log(req.headers.authorization,"token coming from here");
  
      let bearerToken = req.headers.authorization;
      token = bearerToken.split(' ')[1];
      const decoded = await jwt.verify(token,process.env.JWT_SCRETEKEY);

      req.user=decoded;
      if(!decoded){
          return res.status(400).json({
              message:'token not valid '
          })
      }
      next();
  }
  
} catch (error) {
    console.log(error,"error from jwt midleware")
    return res.status(400).json({
        message:`Something went wrong ${error.message}`
    })
}
}

async function isAdmin(req,res,next) {
    try {
        // console.log(req.user,"****************USER ID******************");
        const user = await userModel.findById( req.user.id )

        console.log(user,"isAdmin user");
        if(user.role !=="1")
        {
            // console.log(user,"inside isAdmin");
            return res.status(401).JSON({
                success:fasle,
                message:'UnAuthorized access'
            })
        }
        else{ next();}
    } catch (error) {
        console.log(error);
        res.status(401).send({
            success:false,
            error,
            message:'error in admin middleware'
        })
    }
}

module.exports = {jwtVerify,isAdmin};

