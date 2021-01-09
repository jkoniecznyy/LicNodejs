const jwt = require("jsonwebtoken");
const config = require("../config/auth.config.js");

verifyToken = (req, res, next) => {
    let accessToken = req.cookies.jwt
    console.log(accessToken)
    if (!accessToken) {
        return res.status(403).send({ message: "No token provided!" });
    }

    jwt.verify(accessToken, config.secret, (err, decoded) => {
        if (err) {
            return res.status(401).send({ message: "Unauthorized!" });
        }
        req.userId = decoded.id;
        console.log("Token verified")

        next();
    });
};

const authJwt = {
    verifyToken
};
module.exports = authJwt;