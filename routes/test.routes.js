const jwtMiddleware = require("../middleware/jwt.middleware");
const validationMiddleware = require('../middleware/validation.middleware')
const userService = require('../services/user.service')
const testController = require("../controllers/test.controller");

module.exports = function (app) {
    app.get("/api/test/all", testController.allAccess);

    app.get("/api/test/user", [jwtMiddleware.verifyToken], testController.userAccess);

    app.get("/api/test/admin",
        [jwtMiddleware.verifyToken,  userService.findUserById, validationMiddleware.isAdmin],
        testController.adminAccess);

    app.get("/api/test/error", testController.throwErr);
};