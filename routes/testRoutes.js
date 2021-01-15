const {validateFunctions} = require("../middleware");
const testController = require("../Controllers/testController");

module.exports = function (app) {
    app.get("/api/test/all", testController.allAccess);

    app.get("/api/test/user", [validateFunctions.verifyToken], testController.userAccess);

};