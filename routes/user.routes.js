const tokenMiddleware = require("../middleware/token.middleware");
const validationMiddleware = require("../middleware/validation.middleware");
const userService = require("../services/user.service");
const userController = require("../controllers/user.controller");

module.exports = function (app) {

    app.post("/api/user/register",
        [validationMiddleware.validateForm, userService.checkDuplicatedUsername],
        userController.createUser);

    app.post("/api/user/login",     //TODO findUserByUsername wywoływać w user.controller
        [validationMiddleware.validateForm, userService.findUserByUsername],
        userController.login);

    app.get("/api/user/logout",
        userController.logout);

    app.post("/api/user/change",
        [tokenMiddleware.verifyToken],
        userController.changePassword);
};
