const jwt = require("jsonwebtoken");
const config = require("../config/auth.config.js");

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