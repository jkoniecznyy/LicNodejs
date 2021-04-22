import axios from 'axios'
const url = '/api/test/'


class TestService {

    static TestPublicAccess() {
        return "Hi Jurek, its me Mario"
        // return new Promise(async (resolve, reject) => {
        //     try {
        //         const res = await axios.get(`${url}public`);
        //         const data = res.data
        //         resolve(
        //             data.map(transaction => ({
        //                 ...transaction
        //             }))
        //         )
        //     } catch (err) {
        //         reject(err.message)
        //     }
        // })
    }
}

export default TestService