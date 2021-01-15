const jwt = require("jsonwebtoken");
const config = require("../config/auth.config.js");

verifyToken = (req, res, next) => {
    let accessToken = req.cookies.jwt
    if (!accessToken) {
        return res.status(403).send({ message: "No token provided!" });
    }

    jwt.verify(accessToken, config.secret, (err, decoded) => {
        if (err) {
            return res.status(401).send({ message: "Unauthorized!" });
        }
        res.locals.userId = decoded.id;
        console.log("Token verified")
        //TODO FINDING A USER

        console.log(accessToken)
        console.log(config.secret)
        console.log('Decoded: ', res.locals.userId)
        next();
    });
};

const jwtFunctions = {
    verifyToken
};
module.exports = jwtFunctions;