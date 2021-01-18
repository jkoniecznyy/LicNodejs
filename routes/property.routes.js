const jwtMiddleware = require("../middleware/jwt.middleware");
const propertyController = require("../controllers/property.controller");

module.exports = function (app) {

    app.post("/api/property/new", [jwtMiddleware.verifyToken], propertyController.addProperty);


};