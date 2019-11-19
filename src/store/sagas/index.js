import { put, call, takeLatest, all } from 'redux-saga/effects';
import { history } from '../configureStore'

import {
    LOAD_MAIN_START, LOAD_MAIN_SUCCESS, LOAD_MAIN_FAILURE,
    LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILURE,
    SINGUP_START, SINGUP_SUCCESS, SINGUP_FAILURE,
    LOGOUT_START, LOGOUT_SUCCESS, LOGOUT_FAILURE
} from '../actionTypes'
import { fetchMainApi, singInApi, singUpApi } from '../../api'

//Saga to receive core/initial data for application menu, categories etc...
function* callFetchMain() {
    try {
        const result = yield call(fetchMainApi)
        yield put({ type: LOAD_MAIN_SUCCESS, payload: result });
    } catch (error) {
        yield put({ type: LOAD_MAIN_FAILURE, payload: error });
    }
}

//Saga to handle login
function* callSingIn(action) {
    console.log('SAGA action SingIN payload - ', action)
    try {
        const userResult = yield call(singInApi, action.payload)
        console.log('SAGA after API SingIN user - ', userResult)
        if (userResult.code === 'auth/wrong-password' || userResult.code === 'auth/too-many-requests') {
            throw new Error(userResult.message);
        } else {
            yield put({ type: LOGIN_SUCCESS, payload: userResult });
            localStorage.setItem("token", userResult.l);
            history.push('/main/Home')
        }
    } catch (error) {
        console.log('SAGA after API SingIN ERROR - ', error.message)
        yield put({ type: LOGIN_FAILURE, payload: error.message });
    }
}

//Saga to handle singup
function* callSingUp(action) {
    console.log('SAGA action SingUP payload - ', action)
    try {
        const userResult = yield call(singUpApi, action.payload)
        console.log('SAGA after API SingUP user - ', userResult)
        if (userResult.code === 'auth/wrong-password') {
            throw new Error(userResult.message);
        } else {
            yield put({ type: SINGUP_SUCCESS, payload: userResult });
            localStorage.setItem("token", userResult.l);
            history.push('/main/Home')
        }
    } catch (error) {
        yield put({ type: SINGUP_FAILURE, payload: error });
    }
}

//Saga to handle logout
function* callLogOut(action) {
    console.log('SAGA action LogOut payload - ', action)
    try {
        yield put({ type: LOGOUT_SUCCESS });
        localStorage.removeItem("token");
        history.push('/auth');
    } catch (error) {
        yield put({ type: LOGOUT_FAILURE, payload: error });
    }
}

//Watchers to run every saga
function* mainWatcher() {
    yield takeLatest(LOAD_MAIN_START, callFetchMain)
}
function* singInWatcher() {
    yield takeLatest(LOGIN_START, callSingIn)
}
function* singUpWatcher() {
    yield takeLatest(SINGUP_START, callSingUp)
}
function* logOutWatcher() {
    yield takeLatest(LOGOUT_START, callLogOut)
}

//Run all watchers
export default function* rootSaga() {
    yield all([
        mainWatcher(),
        singInWatcher(),
        singUpWatcher(),
        logOutWatcher()
    ]);
}