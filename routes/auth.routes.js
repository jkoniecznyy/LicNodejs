const {verifySignUp} = require("../middleware");
const authController = require("../controllers/authController");
const {authJwt} = require("../middleware");

module.exports = function (app) {

    app.post("/api/auth/register",
        [verifySignUp.validateForm, verifySignUp.checkDuplicateUsername],
        authController.createUser);

    app.post("/api/auth/login",
        [verifySignUp.validateForm, verifySignUp.validatePassword],
        authController.login);

    app.post("/api/auth/change",
        [authJwt.verifyToken],
        authController.changePassword);
};
