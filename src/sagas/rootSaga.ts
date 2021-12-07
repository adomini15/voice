import {all} from "redux-saga/effects"
import {watcherAuthSaga} from "./customs/authSaga";

export function* rootSaga() {
    yield all([
        watcherAuthSaga()
    ])
}