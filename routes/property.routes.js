const tokenMiddleware = require("../middleware/token.middleware");
const validationMiddleware = require("../middleware/validation.middleware");
const propertyController = require("../controllers/property.controller");
const userService = require("../services/user.service");

module.exports = function (app) {

    app.post("/api/property/new", [tokenMiddleware.verifyToken], propertyController.addProperty);

    app.get("/api/property/user", [tokenMiddleware.verifyToken], propertyController.getUserProperties);

    app.get("/api/property/all",
        [tokenMiddleware.verifyToken,  userService.findUserById, validationMiddleware.isAdmin],
        propertyController.getAllProperties);
};