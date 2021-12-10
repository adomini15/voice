import {all} from "redux-saga/effects"
import {watcherAuthSaga} from "./customs/authSaga";
import {watcherEventSaga} from "./customs/eventSaga";

export function* rootSaga() {
    yield all([
        watcherAuthSaga(),
        watcherEventSaga()
    ])
}