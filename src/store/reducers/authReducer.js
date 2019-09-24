import {SINGIN_SUCCESS, SINGIN_FAILURE,
        LOGOUT_SUCCESS, LOGOUT_FAILURE,
        SINGUP_SUCCESS, SINGUP_FAILURE} from '../actionTypes'

const initialState = {
    logined: Boolean(localStorage.getItem('token'))
}

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case SINGIN_SUCCESS:
            console.log('SINGIN_SUCCESS', payload)
            state.user = payload;
            state.logined = true;
            return;
        case SINGUP_SUCCESS:
            console.log('SINGUP_SUCCESS', payload)
            state.user = payload;
            state.logined = true;
            return;
        case LOGOUT_SUCCESS:
            console.log('LOGOUT_SUCCESS')
            state.user = null;
            state.logined = false;
            return;
        case SINGIN_FAILURE:
            console.log('SINGIN_FAILURE', payload)
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