import { SHORTCUT1_ADD, SHORTCUT2_ADD, SHORTCUT3_ADD, SHORTCUT4_ADD, SHORTCUT_UPDATE } from '../actionTypes'

const initialState = {
    historyState: { page: 0 },
    shortcut1: '',
    shortcut2: '',
    shortcut3: '',
    shortcut4: '',
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case SHORTCUT1_ADD:
            // console.log('SHORTCUT1_ADD', payload)
            state.shortcut1 = payload;
            state.shortcut2 = [];
            return;
        case SHORTCUT2_ADD:
            // console.log('SHORTCUT2_ADD', payload)
            state.shortcut2 = payload;
            state.shortcut3 = [];
            return;
        case SHORTCUT3_ADD:
            // console.log('SHORTCUT3_ADD', payload)
            state.shortcut3 = payload;
            state.shortcut4 = [];
            return;
        case SHORTCUT4_ADD:
            // console.log('SHORTCUT4_ADD', payload)
            state.shortcut4 = payload;
            return;
        case SHORTCUT_UPDATE:
            // console.log('SHORTCUT_UPDATE')
            state.historyState = payload;
            return;
        default: return state
    }
}