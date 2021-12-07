// external
import { FirebaseError } from 'firebase/app'
import { call, put, takeEvery } from "redux-saga/effects";

// internal
import {AuthService} from "../../services/AuthService";
import {FirebaseAuthRepository} from "../../repos/auth/FirebaseAuthRepository";
import {
    authSignInFailed,
    authSignInSuccess,
    authSignUpFailed,
    authSignUpSuccess, authUserFailed,
    authUserSuccess
} from "../../actions/authActions";
import {FormatFirebaseError} from "../../utils/errors/FormatFirebaseError";

// AuthService launched with specific auth repository
const authService = AuthService.Instance(new FirebaseAuthRepository())

function* getAuthUser () : any {
    try {
        const authUser = yield call(authService.getAuthenticatedUser)

        yield put(authUserSuccess(authUser));
    } catch (error: any) {
        if (error instanceof FirebaseError) {
            yield put(authUserFailed(FormatFirebaseError[error.code]))
            return;
        }

        throw error;
    }
}

function* OnSignIn (action:any): any {
    try {
        const {user} = action.payload;
        const authUser = yield call(authService.signin, user)

        yield put(authSignInSuccess(authUser));
    } catch (error: any) {
        if (error instanceof FirebaseError) {
            yield put(authSignInFailed(FormatFirebaseError[error.code]))
            return;
        }

        throw error;
    }
}

function* OnSignUp(action: any): any {
    try {
        const { user } = action.payload;
        const authUser = yield call(authService.signup, user);

        yield put(authSignUpSuccess(authUser))
    } catch (error: any) {
        if(error instanceof FirebaseError) {
            yield put(authSignUpFailed(FormatFirebaseError[error.code]));
            return;
        }

        throw error;
    }
}

export function* watcherAuthSaga() {
    yield takeEvery('@auth-user/requested', getAuthUser)
    yield takeEvery('@auth-sign-in/requested', OnSignIn)
    yield takeEvery('@auth-signup/requested', OnSignUp);
}