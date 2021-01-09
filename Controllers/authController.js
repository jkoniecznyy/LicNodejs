const config = require("../config/auth.config.js");
const User = require('../model/user')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')


const createUser = async (req, res) => {
    console.log('Creating user: ', req.body)
    let {username, password} = req.body

    password = await bcrypt.hash(password, 10)

    try {
        const response = await User.create({
            username,
            password
        })

        console.log('User created successfully!', response)
        res.status(200).send({status: 'User created successfully!'});
    } catch (error) {
        console.log(error.message)
        console.log(JSON.stringify(error))
        return res.status(404).send({message: "Cannot create a user."})
    }

}


const login = async (req, res) => {
    console.log('Logging user: ', req.body.username)

    const token = jwt.sign({id: req.userId}, config.secret, {
        expiresIn: 86400 // 24 hours
    });
    console.log('User logged')

    res.cookie("jwt", token, {
        httpOnly: true,
    });

    res.status(200).send({
        username: req.body.username,
        status: 'Logged in'
    });

};

// const logout = async (req, res) => {
//     console.log('Loging out')
// };

const changePassword = async (req, res) => {
    console.log('Changing password')
    let {password} = req.body
    try {
        const _id = req.userId
        password = await bcrypt.hash(password, 10)
        await User.updateOne(
            {_id},
            {
                $set: {password}
            }
        )
        return res.status(200).send({
            status: 'Password changed'
        });
    } catch (error) {
        console.log(error)
        return res.status(404).send({message: "Password change failed."})
    }

};

module.exports = {
    createUser,
    login,
    changePassword
}