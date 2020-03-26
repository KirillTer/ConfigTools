import { LOAD_MAIN_SUCCESS, LOAD_LANGUAGE_SUCCESS } from '../actionTypes'

const initialState = {}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case LOAD_MAIN_SUCCESS:
            console.log('LOAD_MAIN_SUCCESS')
            state.main = payload;
            return;
        case LOAD_LANGUAGE_SUCCESS:
            console.log('LOAD_MAIN_SUCCESS')
            state.current_language = payload.current_language;
            state.default_language = payload.default_language;
            state.available_languages_list = payload.available_languages_list;
            return;
        default: return state
    }
}