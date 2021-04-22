const tokenMiddleware = require("../middleware/token.middleware");
const validationMiddleware = require('../middleware/validation.middleware')
const userService = require('../services/user.service')
const testController = require("../controllers/test.controller");

module.exports = function (app) {
    app.get("/api/test/public", testController.publicAccess);

    app.get("/api/test/user", [tokenMiddleware.verifyToken], testController.userAccess);

    app.get("/api/test/admin",
        [tokenMiddleware.verifyToken,  userService.findUserById, validationMiddleware.isAdmin],
        testController.adminAccess);

    app.get("/api/test/error", testController.throwErr);
};