import axios from 'axios';
import setAuthorizationToken from "../util/setAuthorizationToken";
import jwtDecode from 'jwt-decode';
import {SET_CURRENT_USER} from "./types";

export function setCurrentUser(user) {
    return {
        type: SET_CURRENT_USER,
        user
    };
}

export function logout() {
    return dispatch => {
        localStorage.removeItem('jwtToken');
        setAuthorizationToken(false);
        dispatch(setCurrentUser({}));
    }
}

export function getAuthErrors(data) {
    return dispatch => {
        return axios.post('/api/auth', data).then(
            res => {
                if (res.data.isValid === false) {
                    return {errors: res.data.errors};
                } else {
                    const token = res.data.jwt;
                    localStorage.setItem('jwtToken', token);
                    setAuthorizationToken(token);
                    dispatch(setCurrentUser(jwtDecode(token)));
                    return {errors: null};
                }

            })
    }
}