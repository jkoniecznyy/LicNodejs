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
            userId: res.locals.userId  })


        res.status(200).send(transactions);
    } catch (err) {
        console.log("Couldn't get all transactions!", err)
        return res.status(403).send({message: "Couldn't get all transactions!"});
    }
}

const newTransaction = async (req, res) => {
    const userId = res.locals.userId
    const { propertyId, description, value } = req.body
    try {
        const response = await Transaction.create({
            userId,
            propertyId,
            description,
            value
        })

        console.log('Transaction created successfully!', response)

        res.status(200).send("Transaction created successfully!")
    } catch (error) {
        console.log(error.message)
        return res.status(403).send({ message: "Couldn't create a transaction!" });
    }
}



module.exports = {
    getAllTransactions,
    getYourTransactions,
    newTransaction
}