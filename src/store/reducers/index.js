import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import { reducer as form } from 'redux-form'
import produce from 'immer';

import mainReducer from './mainReducer';
import authReducer from './authReducer';

const curriedMainReducer = produce(mainReducer)
const curriedAuthReducer = produce(authReducer)

export default (history) => combineReducers({
    router: connectRouter(history),
    form,
    curriedMainReducer,
    curriedAuthReducer
})