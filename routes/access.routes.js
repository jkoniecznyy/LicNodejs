const TokenMiddleware = require("../middleware/token.middleware");
const ValidationMiddleware = require('../middleware/validation.middleware')
const UserService = require('../services/user.service')
const AccessController = require("../controllers/access.controller");

module.exports = function (app) {
    app.get("/api/access/public", AccessController.confirmAccess);

    app.get("/api/access/user", [TokenMiddleware.verifyToken], AccessController.confirmAccess);

    app.get("/api/access/admin",
        [TokenMiddleware.verifyToken,  UserService.findUserById, ValidationMiddleware.isAdmin],
        AccessController.confirmAccess);

    app.get("/api/access/error", AccessController.throwErr);
};