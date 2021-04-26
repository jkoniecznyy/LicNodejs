import axios from 'axios'

const url = '/api/test/'

export default {
    async TestAnyAccess(accessType) {
        try {
            let res = await axios.get(`${url}${accessType}`);
            return res.status === 200;
        } catch (err) {
            return false
        }
    }

}
