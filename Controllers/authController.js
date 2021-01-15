const config = require("../config/auth.config.js");
const User = require('../model/user')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const createUser = async (req, res) => {
    console.log('Creating user: ', req.body)
    let {username, password} = req.body
    password = await bcrypt.hash(password, 10)  //TODO tego chyba nie ma sensu wyrzucac z tej fkcji?
    try {
        await User.create({
            username,
            password
        })

        res.status(200).send({status: 'User created successfully!', username});
    } catch (error) {
        res.status(404).send({message: "Cannot create a user."})
    }
}

const login = async (req, res) => {
    try {
        const token = jwt.sign({id: res.locals.user._id}, config.secret, {
            expiresIn: 86400 // 24 hours    //TODO tego chyba nie ma sensu wyrzucac z tej fkcji?
        });
        console.log('User logged')

        res.cookie("jwt", token, {
            httpOnly: true,
        });

        res.status(200).send({
            username: req.body.username,
            status: 'Logged in'
        });
    } catch (error) {
        return res.status(404).send({message: "Login failed."})
    }
};

const logout = async (req, res) => {
    console.log('Logging out')
    res.clearCookie("jwt")
    res.status(200).send({
        status: 'Logged out'
    });
};

const changePassword = async (req, res) => {
    console.log('Changing password')
    let {password} = req.body
    try {
        const _id = res.locals.userId
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
    logout,
    changePassword
}