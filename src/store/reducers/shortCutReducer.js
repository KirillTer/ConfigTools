import {SHORTCUT_ADD, SHORTCUT_UPDATE} from '../actionTypes'

const initialState = {
    history: {page: 0},
    shortcut: {page: 0}
}

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case SHORTCUT_ADD:
            console.log('SHORTCUT_ADD')
            state.shortcut = payload;
            return;
        case SHORTCUT_UPDATE:
            console.log('SHORTCUT_UPDATE')
            state.history = payload;
            return;
        default: return state
    }
}