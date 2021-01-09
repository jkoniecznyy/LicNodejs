const {authJwt} = require("../middleware");
const userController = require("../controllers/userController");

module.exports = function (app) {
    app.get("/api/test/all", userController.allAccess);

    app.get("/api/test/user", [authJwt.verifyToken], userController.userAccess);

};