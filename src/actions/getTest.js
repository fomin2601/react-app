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

export function checkTest(answers) {
    return dispatch => {
        return axios.post('/api/check_test', answers)
    }
}