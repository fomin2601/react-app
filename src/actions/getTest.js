import axios from 'axios'

export function getTest(id) {
    return dispatch => {
        return axios.get('/api/test?', {
            params: {
                id: id
            }
        })
    }
}