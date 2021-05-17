const User = require('../models/user.model')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require("../config/global.config.js");

exports.addUserToDatabase = async (email, password, isAdmin) => {
    try {
        await User.create({
            email,
            password,
            isAdmin
        })
        return true
    } catch (error) {
        console.log(error)
        return false
    }
}


exports.findUserById = async (req, res, next) => {
    console.log('findUserById')
    try {
        User.findOne({
            _id: res.locals.userId
        }).exec((err, user) => {
            if (err) return res.status(500).send({message: err});
            if (!user) return res.status(401).send({message: "User Not found."});

            res.locals.user = user
            next()
        })
    } catch (err) {
        console.log('findUserById', err)
        res.status(500).send({message: err});
    }
}

exports.findUserByEmail = async (email) => {
    try {
        return await User.findOne({email}).exec()
    } catch (error) {
        console.log(error)
        return null
    }
}

exports.checkDuplicatedEmail = async (req, res, next) => {
    User.findOne({
        email: req.body.email
    }).exec((err, user) => {

        if (err) return res.status(500).send({message: err});
        if (user) return res.status(401).send({message: "Failed! Email is already in use!"});

        next();
    });
};

exports.editPasswordInDatabase = async (_id, password) => {
    try {
        await User.updateOne(
            {_id},
            {
                $set: {password}
            }
        )
        return true
    } catch (error) {
        console.log(error)
        return false
    }
};

/**
 * Hash password with bcrypt.hash
 * @param {string} password
 * @returns {Promise<string>}
 */
exports.hashPassword = async (password) => {
    return await bcrypt.hash(password, 10)
};

/**
 * Validate password with bcrypt.compare
 * @param {string} password
 * @param {Object} user
 * @returns {Promise<boolean>}
 */
exports.validatePassword = async (password, user) => {
    if (!user) return false
    return await bcrypt.compareSync(
        password,
        user.password
    );
};

exports.createUserToken = (userID) => {
    try {
        return jwt.sign({id: userID}, config.secret, {
            expiresIn: 86400 // 24 hours
        });
    } catch (error) {
        console.log(error)
        return null
    }
}


