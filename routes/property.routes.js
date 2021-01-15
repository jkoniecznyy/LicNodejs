const {validateFunctions} = require("../middleware");
const propertyController = require("../controllers/propertyController");

module.exports = function (app) {

    app.post("/api/property/new", [validateFunctions.verifyToken], propertyController.addProperty);


};