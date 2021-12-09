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
    authSignUpSuccess, authUpdateProfileFailed, authUpdateProfileSuccess, authUserFailed,
    authUserSuccess
} from "../../actions/authActions";
import {FormatFirebaseError} from "../../utils/errors/FormatFirebaseError";
import {FirebaseStorageHelper} from "../../utils/upload/FirebaseStorageHelper";

// AuthService launched with specific auth repository
const authService = AuthService.Instance(new FirebaseAuthRepository())

function* OnGetAuthenticatedUser () : any {
    try {
        const feedback = yield call(authService.getAuthenticatedUser)

        yield put(authUserSuccess(feedback));
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
        const feedback = yield call(authService.signin, user)

        yield put(authSignInSuccess(feedback));
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
        const feedback = yield call(authService.signup, user);

        yield put(authSignUpSuccess(feedback))
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
    yield takeEvery('@auth-user/requested', OnGetAuthenticatedUser)
    yield takeEvery('@auth-sign-in/requested', OnSignIn)
    yield takeEvery('@auth-signup/requested', OnSignUp);
    yield takeEvery('@auth-update-profile/requested', OnUpdateProfile)
}