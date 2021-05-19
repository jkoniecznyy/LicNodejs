const TokenMiddleware = require("../middleware/token.middleware");
const ValidationMiddleware = require('../middleware/validation.middleware')
const UserService = require('../services/user.service')
const TransactionController = require("../controllers/transaction.controller");

module.exports = function (app) {
    app.get("/api/transaction/all",
        [TokenMiddleware.verifyToken, UserService.findUserById, ValidationMiddleware.isAdmin],
        TransactionController.getAllTransactions);

    app.get("/api/transaction/user", [TokenMiddleware.verifyToken], TransactionController.getUserTransactions);

    app.post("/api/transaction/new", [TokenMiddleware.verifyToken], TransactionController.newTransaction);

};
