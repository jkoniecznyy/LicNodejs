import axios from 'axios'

const url = 'http://localhost:3000/api/transaction/'

class TransactionService {
    static getPosts() {
        return new Promise(async (resolve, reject) => {
            try {
                const res = await axios.get(`${url}all`);
                const data = res.data
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

export default TransactionService