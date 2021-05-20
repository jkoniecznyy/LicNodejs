import axios from 'axios'

const url = '/api/property/'

export default {
    async getUserProperties(){
        try {
            const res = await axios.get(`${url}user`);
            const userProperties = res.data
            console.log(userProperties)
            userProperties.forEach( (property)=>{
                property.rent = property.rent.$numberDecimal
            })
            return userProperties
        } catch (err) {
            console.log(err.message)
            return null
        }
    },
    async getUserPropertyIds(){
        try {
            return await this.getIdsFromProperties(await this.getUserProperties())
        } catch (err) {
            console.log(err.message)
            return null
        }
    },

    async getIdsFromProperties(properties){
        try {
            let ids = []
            properties.forEach( (property)=>{
                ids.push(property._id)
            })
            console.log(ids)
            return ids
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
