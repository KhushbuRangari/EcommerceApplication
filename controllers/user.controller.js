const userModel = require('../models/user.model.js');
let bcrypt = require('bcryptjs');
let salt = bcrypt.genSaltSync(6);

const jwt = require('jsonwebtoken');


const register = async (req, res) => {
    const { username, email, password } = req.body;
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const role='0';
     console.log(req.body)
    try {

        if (username == '' || email == '' || password == '') {
            return res.status(400).json({
                message: "Please fill all the fields"
            })
        }
        if (!email.match(emailRegex)) {
            return res.status(400).json({
                message: "Invalid email format"
            });
        }

        const user = await userModel.find({ email });
         console.log(user);
        if (user.length > 0) {


            return res.status(400).json({
                message: "user already exists",
                user
            })
        }
        const registeredUser = await userModel.create({
            username,
            email,
            role,
            password: await bcrypt.hash(password, salt)
        })
        const token = jwt.sign({ id: registeredUser._id }, process.env.JWT_SCRETEKEY, {
            expiresIn: '24h'
        })
        res.status(200).json({
            message: `User registered`,
            registeredUser,
            token
        })

        // single HTTP request has single response

    } catch (error) {
        console.log(error);
        if (error.code === 11000) {
            console.log('duplicate User');
            return { message: 'saved User  but with errors' };
        } else {
            throw new Error(error);
        }
      
    }
}

const login = async (req, res) => {

    const { email, password } = req.body;
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    console.log(req.body);
    try {

        if (email == '' || password == '') {
            return res.status(404).json({
                message: 'Please fill all fields'
            })
        }

        if (!email.match(emailRegex)) {
            return res.status(400).json({
                message: "Invalid email format"
            });
        }


        const user = await userModel.find({ email });

        // console.log(user.length);
        if (user.length == 0) {
            return res.status(400).json({
                message: `user dose not exist , please register`
            })
        }




        if (user.length > 0 && user[0].password) {
            if (await bcrypt.compare(password, user[0].password)) {
                const token = jwt.sign({ id: user[0]._id }, process.env.JWT_SCRETEKEY, {
                    expiresIn: '24h'
                })
                return res.status(200).json({
             
                    user,
                    token
                })
            }
        }
    } catch (error) {
        console.log(error);

        res.status(400).json({
            message: `Something went wrong ${error.message}`
        })
    }
}


const getAllUser = async (req, res) => {
    try {
        const listOfUsers = await userModel.find({});

        console.log(listOfUsers);
        if (listOfUsers.length > 0) {
            return res.status(200).json({
                message: 'list of Users',
                listOfUsers
            })
        }
        res.status(400).json({
            message: 'user db is empty'
        })
    } catch (error) {
        return res.status(400).json({
            message: 'Something went wrong',

        })
    }
}
module.exports = {
    register, login, getAllUser
}