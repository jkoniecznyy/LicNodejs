const jwtMiddleware = require("../middleware/jwt.middleware");
const validationMiddleware = require("../middleware/validation.middleware");
const userService = require("../services/user.service");
const authController = require("../controllers/user.controller");

module.exports = function (app) {

    app.post("/api/auth/register",
        [validationMiddleware.validateForm, userService.checkDuplicatedUsername],
        authController.createUser);

    app.post("/api/auth/login",
        [validationMiddleware.validateForm, userService.findUserByUsername, jwtMiddleware.validatePassword],
        authController.login);

    app.get("/api/auth/logout",
        authController.logout);

    app.post("/api/auth/change",
        [jwtMiddleware.verifyToken],
        authController.changePassword);
};
