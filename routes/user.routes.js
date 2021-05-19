const TokenMiddleware = require("../middleware/token.middleware");
const ValidationMiddleware = require("../middleware/validation.middleware");
const UserService = require("../services/user.service");
const UserController = require("../controllers/user.controller");

module.exports = function (app) {

    app.post("/api/user/register",
        [ValidationMiddleware.validateForm, UserService.checkDuplicatedEmail],
        UserController.createUser);

    app.post("/api/user/login",
        [ValidationMiddleware.validateForm, UserController.findUserByEmail],
        UserController.login);

    app.get("/api/user/logout",
        UserController.logout);

    app.post("/api/user/change",
        [TokenMiddleware.verifyToken],
        UserController.changePassword);

    app.get("/api/user/info",
        [TokenMiddleware.verifyToken, UserService.findUserById],
        UserController.getUser);
};
