const TokenMiddleware = require("../middleware/token.middleware");
const ValidationMiddleware = require("../middleware/validation.middleware");
const PropertyController = require("../controllers/property.controller");
const UserService = require("../services/user.service");

module.exports = function (app) {

    app.post("/api/property/new", [TokenMiddleware.verifyToken], PropertyController.addProperty);

    app.get("/api/property/user", [TokenMiddleware.verifyToken], PropertyController.getUserProperties);

    app.get("/api/property/all",
        [TokenMiddleware.verifyToken,  UserService.findUserById, ValidationMiddleware.isAdmin],
        PropertyController.getAllProperties);
};