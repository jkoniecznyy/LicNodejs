const tokenMiddleware = require("../middleware/token.middleware");
const validationMiddleware = require('../middleware/validation.middleware')
const userService = require('../services/user.service')
const transactionController = require("../controllers/transaction.controller");

module.exports = function (app) {
    app.get("/api/transaction/all",
        [tokenMiddleware.verifyToken, userService.findUserById, validationMiddleware.isAdmin],
        transactionController.getAllTransactions);

    app.get("/api/transaction/user", [tokenMiddleware.verifyToken], transactionController.getUserTransactions);

    app.post("/api/transaction/new", [tokenMiddleware.verifyToken], transactionController.newTransaction);


};
