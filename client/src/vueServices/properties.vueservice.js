import axios from 'axios'

const url = 'http://localhost:3000/api/transaction/'

export default {
    async getUserProperties(){
        try {
            const res = await axios.get(`${url}user`);
            const data = res.data
            console.log(data)
            return data
        } catch (err) {
            console.log(err.message)
            return null
        }
    },

    async addTransaction(text){
        return axios.post(`${url}new`, {
            text
        })
    }
}
