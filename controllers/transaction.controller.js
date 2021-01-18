const Transaction = require('../model/transaction.model');
const transactionService = require('../services/transtaction.service')

exports.getAllTransactions = async (req, res) => {
    console.log('getAllTransactions ')
    try {
        const transactions = await transactionService.getAllTransactions()

        res.status(200).send(transactions);
    } catch (err) {
        res.status(500).send({message: "Couldn't get all transactions!"});
    }
}

exports.getYourTransactions = async (req, res) => {
    console.log('getYourTransactions ')
    try {
        const transactions = await transactionService.getUserTransactions(res.locals.userId)

        res.status(200).send(transactions);
    } catch (err) {
        res.status(500).send({message: "Couldn't get your transactions!"});
    }
}

exports.newTransaction = async (req, res) => {
    try {
        const {userId, propertyId, description, value } = req.body
        const response = await Transaction.create({
            userId,
            propertyId,
            description,
            value
        })

        console.log('Transaction created successfully!', response)

        res.status(201).send({message: "Transaction created successfully!"})
    } catch (error) {
        console.log(error.message)
        return res.status(500).send({ message: "Couldn't create a transaction!" });
    }
}
