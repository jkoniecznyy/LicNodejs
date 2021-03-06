import axios from 'axios'

const url = '/api/access/'

export default {
    /**
     * Return true or false depending on the access
     * @param accessType public/user/admin
     * @returns {Promise<boolean>}
     * @constructor
     */
    async TestAnyAccess(accessType) {
        console.log('Testing access')
        let res = await axios.get(`${url}${accessType}`)
            .catch(function (error) {
                if(error.response.status!==401){
                    console.log(error.response.status)
                    console.log(error.response.data.error)
                }
                console.log('Access denied')
                return false
            })
        return res.status === 200;
    }
}
