import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import { reducer as form } from 'redux-form'

import mainReducer from './mainReducer';
import signinReducer from './signinReducer';
import singupReducer from './singupReducer';

export default (history) => combineReducers({
    router: connectRouter(history),
    form,
    mainReducer,
    signinReducer,
    singupReducer
})