const jwtMiddleware = require("../middleware/jwt.middleware");
const validationMiddleware = require('../middleware/validation.middleware')
const userService = require('../services/user.service')
const transactionController = require("../controllers/transaction.controller");

module.exports = function (app) {
    app.get("/api/transaction/all",
        [jwtMiddleware.verifyToken, userService.findUserById, validationMiddleware.isAdmin],
        transactionController.getAllTransactions);

    app.get("/api/transaction/your", [jwtMiddleware.verifyToken], transactionController.getYourTransactions);

    app.post("/api/transaction/new", [jwtMiddleware.verifyToken], transactionController.newTransaction);


};
