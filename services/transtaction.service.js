const Transaction = require('../model/transaction.model');

exports.getAllTransactions = async () => {
    return Transaction.find({})
}
exports.getUserTransactions = async (userId) => {
    return Transaction.find({userId});
}

exports.createTransaction = async (userId, propertyId, description, value) => {
    const newTransaction = await Transaction.create({
        userId,
        propertyId,
        description,
        value
    })

    return isTransaction(newTransaction)
}

const isTransaction = (object) => {
    return (object instanceof Transaction)
}