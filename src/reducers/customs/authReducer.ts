import {Reducer} from "redux";

const initialState: {
    user: any,
    success: any,
    loading: boolean,
    error: any
} = {
    user: null,
    success: null,
    loading: false,
    error: null
}

export const authReducer: Reducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case '@auth-user/requested': {
            return {...state, loading: true, error: undefined}
        }

        case '@auth-user/success': {
            return { ...state, user: action.payload.user, loading: false }
        }

        case '@auth-user/failed': {
            return { ...state, error: payload.error, loading: false }
        }

        case '@auth-signup/requested': {
            return { ...state, loading: true, error: undefined }
        }

        case '@auth-signup/success': {
            return { ...state, user: action.payload.user, loading: false}
        }

        case '@auth-signup/failed': {
            return { ...state, error: payload.error, loading: false }
        }

        case '@auth-sign-in/requested': {
            return { ...state, loading: true, error: undefined }
        }

        case '@auth-sign-in/success': {
            return { ...state, user: action.payload.user, loading: false, error: null }
        }

        case '@auth-sign-in/failed': {
            return  {...state, loading: false, error: action.payload.error }
        }

        case '@auth-logout/requested': {
            return {...state, loading: true, error: undefined}
        }

        case '@auth-logout/success': {
            return {...state, loading: false, error: null}
        }

        case '@auth-logout/failed': {
            return {...state, loading: false, error: action.payload.error}
        }

        case '@auth-update-profile/requested': {
            return  {...state, loading: true, error: undefined}
        }

        case '@auth-update-profile/success': {
            return {...state, loading: false, error: null}
        }

        case '@auth-update-profile/failed': {
            return {...state, loading: false, error: action.payload.error}
        }

        default: {
            return 'Not Action Recognized'
        }
    }
}