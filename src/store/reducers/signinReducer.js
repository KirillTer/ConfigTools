import * as R from 'ramda'
import {SINGIN_SUCCESS, SINGIN_FAILURE} from '../actionTypes'

const initialState = {}

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case SINGIN_SUCCESS:
            console.log('SINGIN_SUCCESS', payload)
            return R.merge(state, {
                user: payload
            })
        case SINGIN_FAILURE:
            console.log('SINGIN_FAILURE', payload)
            return R.merge(state, {
                error: payload
            })
        default: return state
    }
}