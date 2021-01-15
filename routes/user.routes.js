const {validateFunctions} = require("../middleware");
const userController = require("../controllers/userController");

module.exports = function (app) {
    app.get("/api/test/all", userController.allAccess);

    // app.get("/api/addProperty", [validateFunctions.verifyToken], userController.addProperty);

};