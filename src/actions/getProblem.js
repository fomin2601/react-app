import axios from 'axios'

export function getProblem(id) {
    return dispatch => {
        return axios.get('/api/problem?', {
            params: {
                id: id
            }
        })
    }
}