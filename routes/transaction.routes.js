const {validateFunctions} = require("../middleware");
const transactionController = require("../controllers/transactionController");

module.exports = function (app) {
    app.get("/api/transaction/all", [validateFunctions.verifyToken], transactionController.getAllTransactions);
    // TODO Nie kazdy user powinien moc widziec all
    app.get("/api/transaction/your", [validateFunctions.verifyToken], transactionController.getYourTransactions);

    app.post("/api/transaction/new", [validateFunctions.verifyToken], transactionController.newTransaction);


};