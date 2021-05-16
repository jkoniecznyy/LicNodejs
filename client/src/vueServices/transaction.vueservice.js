import axios from 'axios'
const config = require("../../../config/global.config.js");

const url = `${config.serverUrl}/api/transaction/`

class TransactionVueservice {
    static getUserTransactions() {
        return new Promise(async (resolve, reject) => {
            try {
                const res = await axios.get(`${url}user`);
                const data = res.data
                console.log(data)
                resolve(
                    data.map(transaction => ({
                        ...transaction
                    }))
                )
            } catch (err) {
                reject(err.message)
            }
        })
    }

    static addTransaction(text) {
        return axios.post(`${url}new`, {
            text
        })
    }
}

export default TransactionVueservice