const User = require('../model/user')
const jwt = require('jsonwebtoken')
const config = require("../config/auth.config");

validateForm = async (req, res, next) => {
    let {username, password} = req.body
    if (!username || typeof username !== 'string') {
        res.status(400).send({ message: 'Validation failed: wrong username' });
        return;
    }
    if (!password || typeof password !== 'string') {
        res.status(400).send({ message: 'Validation failed: wrong password' });
        return;
    }
    next()
}

checkDuplicateUsername = async (req, res, next) => {
    // Username
    User.findOne({
        username: req.body.username
    }).exec((err, user) => {
        if (err) {
            res.status(500).send({ message: err });
            return;
        }

        if (user) {
            res.status(400).send({ message: "Failed! Username is already in use!" });
        }
        next();
    });
};

const verifySignUp = {
    validateForm,
    checkDuplicateUsername
};

module.exports = verifySignUp;