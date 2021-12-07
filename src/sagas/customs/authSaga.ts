// external
import { FirebaseError } from 'firebase/app'
import { call, put, takeEvery } from "redux-saga/effects";

// internal
import {AuthService} from "../../services/AuthService";
import {FirebaseAuthRepository} from "../../repos/auth/FirebaseAuthRepository";
import {authSignUpFailed, authSignUpSuccess} from "../../actions/authActions";
import {FormatFirebaseError} from "../../utils/errors/FormatFirebaseError";

// AuthService launched with specific auth repository
const authService = AuthService.Instance(new FirebaseAuthRepository())

function* handleOnLogin(action: any): any {
    try {
        const { user } = action.payload;

        const res = yield call(authService.signup, user);

        yield put(authSignUpSuccess(''))
    } catch (error: any) {
        if(error instanceof FirebaseError) {
            yield put(authSignUpFailed(FormatFirebaseError[error.code]));
            return;
        }

        throw error;
    }
}

export function* watcherAuthSaga() {
    yield takeEvery('@auth-signup/requested', handleOnLogin);
}