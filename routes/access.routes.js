const tokenMiddleware = require("../middleware/token.middleware");
const validationMiddleware = require('../middleware/validation.middleware')
const userService = require('../services/user.service')
const accessController = require("../controllers/access.controller");

module.exports = function (app) {
    app.get("/api/access/public", accessController.confirmAccess);

    app.get("/api/access/user", [tokenMiddleware.verifyToken], accessController.confirmAccess);

    app.get("/api/access/admin",
        [tokenMiddleware.verifyToken,  userService.findUserById, validationMiddleware.isAdmin],
        accessController.confirmAccess);

    app.get("/api/access/error", accessController.throwErr);
};