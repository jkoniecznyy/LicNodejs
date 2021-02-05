const transactionService = require('../services/transtaction.service')

exports.newTransaction = async (req, res) => {
    try {
        const {userId, propertyId, description, value} = req.body
        const response = await transactionService.createTransaction(userId, propertyId, description, value)

        if (response) return res.status(201).send({message: "Transaction created successfully!"})
        else return res.status(401).send({message: "Couldn't create your transaction!"})
    } catch (err) {
        res.status(500).send({message: "Couldn't create your transaction!"});
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

exports.getAllTransactions = async (req, res) => {
    console.log('getAllTransactions ')
    try {
        const transactions = await transactionService.getAllTransactions()

        res.status(200).send(transactions);
    } catch (err) {
        res.status(500).send({message: "Couldn't get all transactions!"});
    }
}
