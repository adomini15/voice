// external
import { FirebaseError } from 'firebase/app'
import { call, put, takeEvery } from "redux-saga/effects";

// internal
import {AuthService} from "../../services/AuthService";
import {FirebaseAuthRepository} from "../../repos/auth/FirebaseAuthRepository";
import {
    authLogoutSuccess,
    authSignInFailed,
    authSignInSuccess,
    authSignUpFailed,
    authSignUpSuccess, authUpdateProfileFailed, authUpdateProfileSuccess,
} from "../../actions/authActions";
import {FormatFirebaseError} from "../../utils/errors/FormatFirebaseError";
import {FirebaseStorageHelper} from "../../utils/upload/FirebaseStorageHelper";

// AuthService launched with specific auth repository
const authService = AuthService.Instance(new FirebaseAuthRepository())

function* OnSignIn (action:any): any {
    try {
        const {user} = action.payload;
        yield call(authService.signin, user)

        yield put(authSignInSuccess('User authenticated successfully'))
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
        yield call(authService.signup, user);
        yield put(authSignUpSuccess('User created successfully'))
    } catch (error: any) {
        if(error instanceof FirebaseError) {
            yield put(authSignUpFailed(FormatFirebaseError[error.code]));
            return;
        }

        throw error;
    }
}

function* OnLogout () : any {
    try {

        const feedback = yield call(authService.logout);
        yield put(authLogoutSuccess('User logout successfully'))
    } catch (error: any) {
        if(error instanceof FirebaseError) {
            yield put(authSignUpFailed(FormatFirebaseError[error.code]));
            return;
        }

        throw error;
    }
}

function* OnUpdateProfile (action:any) : any {
    try {
        const { data } = action.payload;
        let imageURL;

        if(data.photo instanceof Blob) {
            imageURL = yield call(FirebaseStorageHelper.uploadImage, data.photo, data.filename)
        }
        
        const feedback = yield call(authService.updateProfile, { photoURL: imageURL, displayName: data.displayName  })
        yield put(authUpdateProfileSuccess(feedback))

    } catch (error) {
        if(error instanceof FirebaseError) {
            yield put(authUpdateProfileFailed(FormatFirebaseError[error.code]));
            return;
        }

        throw error;
    }
}

export function* watcherAuthSaga() {
    yield takeEvery('@auth-sign-in/requested', OnSignIn)
    yield takeEvery('@auth-signup/requested', OnSignUp);
    yield takeEvery('@auth-logout/requested', OnLogout);
    yield takeEvery('@auth-update-profile/requested', OnUpdateProfile)
}