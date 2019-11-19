import {
    LOGIN_SUCCESS, LOGIN_FAILURE,
    LOGOUT_SUCCESS, LOGOUT_FAILURE,
    SINGUP_SUCCESS, SINGUP_FAILURE
} from '../actionTypes'

const initialState = {
    user: {},
    logined: Boolean(localStorage.getItem('token')),
    error: ''
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case LOGIN_SUCCESS:
            console.log('LOGIN_SUCCESS', payload)
            state.error = '';
            state.user = payload;
            state.logined = true;
            return;
        case SINGUP_SUCCESS:
            console.log('SINGUP_SUCCESS', payload)
            state.error = '';
            state.user = payload;
            state.logined = true;
            return;
        case LOGOUT_SUCCESS:
            console.log('LOGOUT_SUCCESS')
            state.error = '';
            state.user = null;
            state.logined = false;
            return;
        case LOGIN_FAILURE:
            console.log('LOGIN_FAILURE', payload)
            state.error = payload;
            return;
        case SINGUP_FAILURE:
            console.log('SINGUP_FAILURE', payload)
            state.error = payload;
            return;
        case LOGOUT_FAILURE:
            console.log('LOGOUT_FAILURE', payload)
            state.error = payload;
            return;
        default: return state
    }
}