import axios from 'axios'

const url = '/api/user/'

export default {
    async login(email, password) {
        try {
            let res = await axios.post(`${url}login`, {
                email,
                password
            });
            return res.status === 200;
        } catch (err) {
            return false
        }
    },
    async getUserInfo(){
        try {
            let user = await axios.get(`${url}info`);
            console.log(user.data)
            return user.data;
        } catch (err) {
            return null
        }
    },
    async logout() {
        let res = await axios.get(`${url}logout`);
        return res.status === 200;
    }

}
