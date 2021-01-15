const {jwtFunctions} = require("../middleware");
const {validateFunctions} = require("../middleware");
const databaseFunctions = require("../middleware/databaseFunctions");
const authController = require("../controllers/authController");
//TODO którym sposobem eksportować: validateFunctions, databaseFunctions, authController
module.exports = function (app) {

    app.post("/api/auth/register",
        [jwtFunctions.validateForm, databaseFunctions.checkDuplicatedUsername],
        authController.createUser);

    app.post("/api/auth/login",
        [jwtFunctions.validateForm, databaseFunctions.findUserByUsername, jwtFunctions.validatePassword],
        authController.login);

    app.get("/api/auth/logout",
        authController.logout);

    app.post("/api/auth/change",
        [validateFunctions.verifyToken],
        authController.changePassword);
};
