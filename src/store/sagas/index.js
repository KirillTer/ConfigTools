import { put, call, takeLatest, all } from 'redux-saga/effects';
import { history } from '../configureStore'

import {
    LOAD_MAIN_START, LOAD_MAIN_SUCCESS, LOAD_MAIN_FAILURE, LOGIN_SAVE,
    LOAD_LANGUAGE_START, LOAD_LANGUAGE_SUCCESS, LOAD_LANGUAGE_FAILURE,
    // SET_LANGUAGE_START, SET_LANGUAGE_SUCCESS, SET_LANGUAGE_FAILURE,
    LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILURE,
    SINGUP_START, SINGUP_SUCCESS, SINGUP_FAILURE,
    CHANGEPASS_START, CHANGEPASS_SUCCESS, CHANGEPASS_FAILURE,
    LOGOUT_START, LOGOUT_SUCCESS, LOGOUT_FAILURE,
    FEATCH_BINGO_ROOM_START, FEATCH_BINGO_ROOM_SUCCESS, FEATCH_BINGO_ROOM_FAILURE,
    CREATE_BINGO_ROOM_START, CREATE_BINGO_ROOM_SUCCESS, CREATE_BINGO_ROOM_FAILURE,
    EDIT_BINGO_ROOM_START, EDIT_BINGO_ROOM_SUCCESS, EDIT_BINGO_ROOM_FAILURE,
    DELETE_BINGO_ROOM_START, DELETE_BINGO_ROOM_SUCCESS, DELETE_BINGO_ROOM_FAILURE
} from '../actionTypes'
import { fetchMainApi, fetchLanguageApi, singInApi, singUpApi, changePassApi, featchBingoRoomApi, createBingoRoomApi, editBingoRoomApi, deleteBingoRoomApi } from '../../api'

//Saga to receive core/initial data for application menu, categories etc...
function* callFetchMain() {
    try {
        const result = yield call(fetchMainApi)
        yield put({ type: LOAD_MAIN_SUCCESS, payload: result });
    } catch (error) {
        yield put({ type: LOAD_MAIN_FAILURE, payload: error });
    }
}

//Saga to receive languages
function* callFetchLanguage(action) {
    try {
        const result = yield call(fetchLanguageApi, action.payload)
        yield put({ type: LOAD_LANGUAGE_SUCCESS, payload: result });
    } catch (error) {
        yield put({ type: LOAD_LANGUAGE_FAILURE, payload: error });
    }
}

//Saga to handle login
function* callSingIn(action) {
    try {
        const userResult = yield call(singInApi, action.payload)
        if (userResult.body.status === "locked") {
            throw new Error(userResult.body.status);
        }
        if (userResult.body.status === "pw") {
            console.log('PW')
            yield put({ type: LOGIN_SAVE, payload: action.payload });
            history.push('/auth/changepass')
            throw new Error(userResult.body.status);
        }
        if (userResult.code === 'auth/wrong-password' || userResult.code === 'auth/too-many-requests') {
            throw new Error(userResult.message);
        } else {
            yield put({ type: LOGIN_SUCCESS, payload: userResult });
            localStorage.setItem("token", userResult.l);
            history.push('/main/Home')
        }
    } catch (error) {
        console.log('Error', error.message)
        if (error.message === 'Unauthorized' || error.message === 'locked') {
            error.message = 'WE HAVE NOT BEEN ABLE TO LOG YOU IN. PLEASE CHECK YOUR USERNAME & PASSWORD, AND TRY AGAIN.'
        }
        yield put({ type: LOGIN_FAILURE, payload: error.message });
    }
}

//Saga to handle singup
function* callSingUp(action) {
    try {
        const userResult = yield call(singUpApi, action.payload)
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

//Saga to handle change password
function* callChangePass(action) {
    console.log('saga change password', action)
    try {
        const changePassResult = yield call(changePassApi, action.payload)
        yield put({ type: CHANGEPASS_SUCCESS, payload: changePassResult });
        history.push('/main/Home')
    } catch (error) {
        yield put({ type: CHANGEPASS_FAILURE, payload: error });
    }
}

//Saga to handle logout
function* callLogOut(action) {
    try {
        yield put({ type: LOGOUT_SUCCESS });
        localStorage.removeItem("token");
        history.push('/auth/singin');
    } catch (error) {
        yield put({ type: LOGOUT_FAILURE, payload: error });
    }
}

//Saga to handle callBingoRoomFeatch
function* callBingoRoomFeatch(action) {
    console.log('SAGA action callBingoRoomFeatch payload - ', action)
    try {
        const featchResult = yield call(featchBingoRoomApi, action.payload)
        console.log('SAGA after API callBingoRoomFeatch - ', featchResult)
        if (false) {
            throw new Error(featchResult.message);
        } else {
            yield put({ type: FEATCH_BINGO_ROOM_SUCCESS, payload: featchResult });
        }
    } catch (error) {
        yield put({ type: FEATCH_BINGO_ROOM_FAILURE, payload: error });
    }
}

//Saga to handle callBingoRoomCreate
function* callBingoRoomCreate(action) {
    console.log('SAGA action callBingoRoomCreate payload - ', action)
    try {
        const createResult = yield call(createBingoRoomApi, action.payload)
        console.log('SAGA after API callBingoRoomCreate - ', action.payload)
        if (false) {
            throw new Error(createResult.message);
        } else {
            yield put({ type: CREATE_BINGO_ROOM_SUCCESS, payload: action.payload });
        }
    } catch (error) {
        yield put({ type: CREATE_BINGO_ROOM_FAILURE, payload: error });
    }
}

//Saga to handle callBingoRoomEdit
function* callBingoRoomEdit(action) {
    console.log('SAGA action callBingoRoomEdit payload - ', action)
    try {
        const editResult = yield call(editBingoRoomApi, action.payload)
        console.log('SAGA after API callBingoRoomEdit - ', editResult)
        if (false) {
            throw new Error(editResult.message);
        } else {
            yield put({ type: EDIT_BINGO_ROOM_SUCCESS, payload: editResult });
        }
    } catch (error) {
        yield put({ type: EDIT_BINGO_ROOM_FAILURE, payload: error });
    }
}

//Saga to handle callBingoRoomDelete
function* callBingoRoomDelete(action) {
    console.log('SAGA action callBingoRoomDelete payload - ', action)
    try {
        const deleteResult = yield call(deleteBingoRoomApi, action.payload)
        console.log('SAGA after API callBingoRoomDelete - ', deleteResult)
        if (false) {
            throw new Error(deleteResult.message);
        } else {
            yield put({ type: DELETE_BINGO_ROOM_SUCCESS, payload: deleteResult });
        }
    } catch (error) {
        yield put({ type: DELETE_BINGO_ROOM_FAILURE, payload: error });
    }
}

//Watchers to run every saga
function* mainWatcher() {
    yield takeLatest(LOAD_MAIN_START, callFetchMain)
}
function* languageWatcher() {
    yield takeLatest(LOAD_LANGUAGE_START, callFetchLanguage)
}
function* singInWatcher() {
    yield takeLatest(LOGIN_START, callSingIn)
}
function* singUpWatcher() {
    yield takeLatest(SINGUP_START, callSingUp)
}
function* changePassWatcher() {
    yield takeLatest(CHANGEPASS_START, callChangePass)
}
function* logOutWatcher() {
    yield takeLatest(LOGOUT_START, callLogOut)
}
function* featchBingoRoomWatcher() {
    yield takeLatest(FEATCH_BINGO_ROOM_START, callBingoRoomFeatch)
}
function* createBingoRoomWatcher() {
    yield takeLatest(CREATE_BINGO_ROOM_START, callBingoRoomCreate)
}
function* editBingoRoomWatcher() {
    yield takeLatest(EDIT_BINGO_ROOM_START, callBingoRoomEdit)
}
function* deleteBingoRoomWatcher() {
    yield takeLatest(DELETE_BINGO_ROOM_START, callBingoRoomDelete)
}

//Run all watchers
export default function* rootSaga() {
    yield all([
        mainWatcher(),
        languageWatcher(),
        singInWatcher(),
        singUpWatcher(),
        logOutWatcher(),
        changePassWatcher(),
        featchBingoRoomWatcher(),
        createBingoRoomWatcher(),
        editBingoRoomWatcher(),
        deleteBingoRoomWatcher(),
    ]);
}