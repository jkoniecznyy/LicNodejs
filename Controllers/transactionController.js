const Transaction = require('../model/transaction');

const getAllTransactions = async (req, res) => {
    console.log('getAllTransactions ')
    try {
        const transactions = await Transaction.find({})

        res.status(200).send(transactions);
    } catch (err) {
        console.log("Couldn't get all transactions!", err)
        return res.status(403).send({message: "Couldn't get all transactions!"});
    }
}

const getYourTransactions = async (req, res) => {
    console.log('getYourTransactions ')
    try {
        const transactions = await Transaction.find({
            userId: req.userId  })


        res.status(200).send(transactions);
    } catch (err) {
        console.log("Couldn't get all transactions!", err)
        return res.status(403).send({message: "Couldn't get all transactions!"});
    }
}

const newTransaction = async (req, res) => {
    console.log('newTransaction ')
    const { value } = req.body
    const userId = req.userId
    console.log('Creating transaction: ', value)
    console.log('Creating transaction: ', userId)
    try {
        const response = await Transaction.create({
            userId,
            value
        })

        console.log('Transaction created successfully!', response)

        res.status(200).send("Transaction created successfully!")
    } catch (error) {
        console.log(error.message)
        console.log(JSON.stringify(error))
        return res.status(403).send({ message: "Couldn't create a transaction!" });
    }
}



module.exports = {
    getAllTransactions,
    getYourTransactions,
    newTransaction
}