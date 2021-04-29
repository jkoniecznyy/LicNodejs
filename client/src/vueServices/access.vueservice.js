import axios from 'axios'

const url = '/api/access/'

export default {
    async TestAnyAccess(accessType) {
        try {
            let res = await axios.get(`${url}${accessType}`);
            console.log('testing access', res.status === 200)
            console.log(res)
            return res.status === 200;
        } catch (err) {
            return false
        }
    }
}
