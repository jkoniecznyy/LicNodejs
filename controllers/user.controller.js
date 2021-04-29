const config = require("../config/global.config.js");
const User = require('../models/user.model')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

exports.createUser = async (req, res) => {
    console.log('Creating user: ', req.body)
    let {username, password} = req.body
    password = await bcrypt.hash(password, 10)
    try {
        await User.create({
            username,
            password
        })

        res.status(201).send({message: 'User created successfully!', username});
        // res.sendStatus(401)
    } catch (error) {
        res.status(500).send({message: "Cannot create a user."})
    }
}

exports.login = async (req, res) => {
    try {
        const isPasswordValid = await validatePassword(req.body.password, res.locals.user)
        if (isPasswordValid === false) return res.status(401).send({message: "Authentication failed."})

        const token = jwt.sign({id: res.locals.user._id}, config.secret, {
            expiresIn: 86400 // 24 hours
        });
        console.log('User logged')

        res.cookie("userToken", token, {
            httpOnly: true,
            sameSite: 'lax',
            secure: true
        });

        res.status(200).send({
            username: req.body.username,
            secure: true
        });
    } catch (error) {
        return res.status(500).send({message: "Login failed."})
    }
};

const validatePassword = async (password, user) => {
    if (!user) return false
    const passwordIsValid = bcrypt.compareSync(
        password,
        user.password
    )
    console.log(passwordIsValid)
    return passwordIsValid;

};

exports.logout = async (req, res) => {
    console.log('Logging out')
    console.log(req.cookies)
    res.clearCookie("userToken")
    res.status(200).send({
        status: 'Logged out'
    });
};

exports.changePassword = async (req, res) => {
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
        return res.status(500).send({message: "Password change failed."})
    }
};
