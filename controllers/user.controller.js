const config = require("../config/auth.config.js");
const User = require('../model/user.model')
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
    } catch (error) {
        res.status(500).send({message: "Cannot create a user."})
    }
}

exports.login = async (req, res) => {
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
        return res.status(500).send({message: "Login failed."})
    }
};

exports.logout = async (req, res) => {
    console.log('Logging out')
    res.clearCookie("jwt")
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
