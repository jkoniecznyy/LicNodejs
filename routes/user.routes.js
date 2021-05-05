const tokenMiddleware = require("../middleware/token.middleware");
const validationMiddleware = require("../middleware/validation.middleware");
const UserService = require("../services/user.service");
const UserController = require("../controllers/user.controller");

module.exports = function (app) {

    app.post("/api/user/register",
        [validationMiddleware.validateForm, UserService.checkDuplicatedEmail],
        UserController.createUser);

    app.post("/api/user/login",
        [validationMiddleware.validateForm, UserController.findUserByEmail],
        UserController.login);

    app.get("/api/user/logout",
        UserController.logout);

    app.post("/api/user/change",
        [tokenMiddleware.verifyToken],
        UserController.changePassword);
};
