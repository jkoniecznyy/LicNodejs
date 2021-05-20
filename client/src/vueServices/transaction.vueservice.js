import axios from 'axios'
// const {Decimal128} = require("bson");

const url = '/api/transaction/'

export default {
    async getUserTransactions() {
        try {
            const res = await axios.get(`${url}user`);
            const userTransactions = res.data
            console.log('data', userTransactions)
            userTransactions.forEach( (transaction)=>{
                transaction.value = transaction.value.$numberDecimal
            })
            return userTransactions
        } catch (err) {
            console.log(err.message)
            return null
        }
    },

    async addTransaction(text) {
        return axios.post(`${url}new`, {
            text
        })
    }
}

