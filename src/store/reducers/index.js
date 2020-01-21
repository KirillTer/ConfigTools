import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import { reducer as form } from 'redux-form'
import produce from 'immer';

import mainReducer from './mainReducer';
import authReducer from './authReducer';
import shortcutReducer from './shortCutReducer';
import bingoRoomReducer from './bingoRoomReducer';

const curriedMainReducer = produce(mainReducer)
const curriedAuthReducer = produce(authReducer)
const curriedShortcutReducer = produce(shortcutReducer)
const curriedBingoRoomReducer = produce(bingoRoomReducer)

export default (history) => combineReducers({
    router: connectRouter(history),
    form,
    curriedMainReducer,
    curriedAuthReducer,
    curriedShortcutReducer,
    curriedBingoRoomReducer
})