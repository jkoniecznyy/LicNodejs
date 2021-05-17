import axios from 'axios'

const url = '/api/property/'

export default {
    async getUserProperties(){
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

    async addProperty(text){
        return axios.post(`${url}new`, {
            text
        })
    }
}
