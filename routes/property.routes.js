const jwtMiddleware = require("../middleware/jwt.middleware");
const propertyController = require("../controllers/property.controller");
const userService = require("../services/user.service");
const validationMiddleware = require("../middleware/validation.middleware");

module.exports = function (app) {

    app.post("/api/property/new", [jwtMiddleware.verifyToken], propertyController.addProperty);

    app.get("/api/property/your", [jwtMiddleware.verifyToken], propertyController.getYourProperties);

    app.get("/api/property/all",
        [jwtMiddleware.verifyToken,  userService.findUserById, validationMiddleware.isAdmin],
        propertyController.getAllProperties);
};