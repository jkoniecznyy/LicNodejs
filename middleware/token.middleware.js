const jwt = require("jsonwebtoken");
const config = require("../config/global.config.js");

exports.verifyToken = async (req, res, next) => {
    let accessToken = req.cookies.userToken
    if (!accessToken) return res.status(401).send({message: "No token provided!"});

    jwt.verify(accessToken, config.secret, (err, decoded) => {
        if (err) return res.status(401).send({message: "Unauthorized!"});
        res.locals.userId = decoded.id;
        console.log("Token verified")
        next();
    });
}
