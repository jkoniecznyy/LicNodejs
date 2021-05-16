import axios from 'axios'

const url = '/api/user/'

export default {
    async login(email, password) {
        try {
            let res = await axios.post(`${url}login`, {
                email,
                password
            });
            console.log(res)
            return res.status === 200;
        } catch (err) {
            return false
        }
    },
    async logout() {
        let res = await axios.get(`${url}logout`);
        return res.status === 200;
    }

}
