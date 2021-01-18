const jwt = require("jsonwebtoken");
const config = require("../config/auth.config.js");
const bcrypt = require('bcryptjs')

exports.verifyToken = async (req, res, next) => {
    let accessToken = req.cookies.jwt
    if (!accessToken) return res.status(403).send({message: "No token provided!"});

    jwt.verify(accessToken, config.secret, (err, decoded) => {
        if (err) return res.status(401).send({message: "Unauthorized!"});

        res.locals.userId = decoded.id;
        console.log("Token verified")
        next();
    });
}

exports.validatePassword = async (req, res, next) => {
    try {
        if (!res.locals.user) return res.status(401).send({message: "Couldn't find a user!"})
        const passwordIsValid = bcrypt.compareSync(
            req.body.password,
            res.locals.user.password
        )
        if (!passwordIsValid) return res.status(401).send({message: "Invalid Password!"})
        next()

    } catch (err) {
        console.log(err)
        return res.status(500).send({message: "Error while find a user!"})
    }
    //TODO tu coś mi nie gra
}

