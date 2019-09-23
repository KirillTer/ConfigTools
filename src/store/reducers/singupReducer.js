import * as R from 'ramda'
import {SINGUP_SUCCESS, SINGUP_FAILURE} from '../actionTypes'

const initialState = {}

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case SINGUP_SUCCESS:
            console.log('SINGUP_SUCCESS', payload)
            return R.merge(state, {
                user: payload
            })
        case SINGUP_FAILURE:
            console.log('SINGUP_FAILURE', payload)
            return R.merge(state, {
                error: payload
            })
        default: return state
    }
}