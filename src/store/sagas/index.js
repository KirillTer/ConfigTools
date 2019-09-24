import { put, call, takeLatest, all } from 'redux-saga/effects';
import { history } from '../configureStore'

import { LOAD_MAIN_START, LOAD_MAIN_SUCCESS, LOAD_MAIN_FAILURE,
SINGIN_START, SINGIN_SUCCESS, SINGIN_FAILURE,
SINGUP_START, SINGUP_SUCCESS, SINGUP_FAILURE,
LOGOUT_START, LOGOUT_SUCCESS, LOGOUT_FAILURE } from '../actionTypes'
import { fetchMainApi, singInApi, singUpApi } from '../../api'

function* callFetchMain() {
    try {
        const result = yield call(fetchMainApi)  
        yield put({ type: LOAD_MAIN_SUCCESS, payload: result });
    } catch(error) {
        yield put({ type: LOAD_MAIN_FAILURE, payload: error });
    }
}
function* callSingIn(action) {
    console.log('SAGA action SingIN payload - ', action)
    try {
        const userResult = yield call(singInApi, action.payload)
        console.log('SAGA after API SingIN user - ', userResult)
        yield put({ type: SINGIN_SUCCESS, payload: userResult });
        localStorage.setItem("token", userResult.l);
        history.push('/main/home')
    } catch(error) {
        yield put({ type: SINGIN_FAILURE, payload: error });
    }
}
function* callSingUp(action) {
    console.log('SAGA action SingUP payload - ', action)
    try {
        const userResult = yield call(singUpApi, action.payload)
        console.log('SAGA after API SingUP user - ', userResult)
        yield put({ type: SINGUP_SUCCESS, payload: userResult });
        localStorage.setItem("token", userResult.l);
        history.push('/main/home')
    } catch(error) {
        yield put({ type: SINGUP_FAILURE, payload: error });
    }
}
function* callLogOut(action) {
    console.log('SAGA action LogOut payload - ', action)
    try {
        // const userResult = yield call(singInApi, action.payload)
        // console.log('SAGA after API SingIN user - ', userResult)
        yield put({ type: LOGOUT_SUCCESS });
        localStorage.removeItem("token");
        history.push('/auth');
    } catch(error) {
        yield put({ type: LOGOUT_FAILURE, payload: error });
    }
}

function* mainWatcher() {
    yield takeLatest(LOAD_MAIN_START, callFetchMain)
}
function* singInWatcher() {
    yield takeLatest(SINGIN_START, callSingIn)
}
function* singUpWatcher() {
    yield takeLatest(SINGUP_START, callSingUp)
}
function* logOutWatcher() {
    yield takeLatest(LOGOUT_START, callLogOut)
}

export default function* rootSaga() {
    yield all([
        mainWatcher(),
        singInWatcher(),
        singUpWatcher(),
        logOutWatcher()
    ]);
}