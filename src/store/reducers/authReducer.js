import {
    LOGIN_SUCCESS, LOGIN_FAILURE, LOGIN_SAVE,
    LOGOUT_SUCCESS, LOGOUT_FAILURE,
    SINGUP_SUCCESS, SINGUP_FAILURE,
    CHANGEPASS_SUCCESS, CHANGEPASS_FAILURE
} from '../actionTypes'

const initialState = {
    user: {},
    logined: Boolean(localStorage.getItem('token')),
    error: ''
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case LOGIN_SUCCESS:
            state.error = '';
            state.user = payload;
            state.logined = true;
            return;
        case SINGUP_SUCCESS:
            state.error = '';
            state.user = payload;
            state.logined = true;
            return;
        case CHANGEPASS_SUCCESS:
            state.error = '';
            return;
        case LOGOUT_SUCCESS:
            state.error = '';
            state.user = null;
            state.logined = false;
            return;
        case LOGIN_SAVE:
            state.user = payload;
            return;
        case LOGIN_FAILURE:
            state.error = payload;
            return;
        case SINGUP_FAILURE:
            state.error = payload;
            return;
        case CHANGEPASS_FAILURE:
            state.error = payload;
            return;
        case LOGOUT_FAILURE:
            state.error = payload;
            return;
        default: return state
    }
}