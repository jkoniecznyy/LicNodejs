const Transaction = require('../model/transaction.model');

exports.getAllTransactions = async () => {
    return Transaction.find({})
}
exports.getUserTransactions = async (userId) => {
    return Transaction.find({userId});
}