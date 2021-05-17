import axios from 'axios'

const url = '/api/transaction/'

export default {
    async getUserTransactions() {
        try {
            const res = await axios.get(`${url}user`);
            const data = res.data
            console.log(res)
            console.log(data)
            return data
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

