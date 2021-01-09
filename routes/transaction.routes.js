const {authJwt} = require("../middleware");
const transactionController = require("../controllers/transactionController");

module.exports = function (app) {
    app.get("/api/transaction/all", [authJwt.verifyToken], transactionController.getAllTransactions);
    app.get("/api/transaction/your", [authJwt.verifyToken], transactionController.getYourTransactions);

    app.post("/api/transaction/new", [authJwt.verifyToken], transactionController.newTransaction);


};