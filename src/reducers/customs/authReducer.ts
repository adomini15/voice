import {Reducer} from "redux";

const initialState: {
    user: any,
    isAuthenticated: boolean | undefined
    success: any,
    loading: boolean,
    error: any
} = {
    user: null,
    isAuthenticated: undefined,
    success: null,
    loading: false,
    error: undefined
}

export const authReducer: Reducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case '@auth-user': {
            return { ...state, user: action.payload.user, isAuthenticated: true }
        }

        case '@auth-signup/requested': {
            return { ...state, loading: true, error: undefined }
        }

        case '@auth-signup/success': {
            return { ...state, success: action.payload.success, loading: false, error: null}
        }

        case '@auth-signup/failed': {
            return { ...state, error: payload.error, loading: false }
        }

        case '@auth-sign-in/requested': {
            return { ...state, loading: true, error: undefined }
        }

        case '@auth-sign-in/success': {
            return { ...state, success: action.payload.success, loading: false, error: null }
        }

        case '@auth-sign-in/failed': {
            return  {...state, loading: false, error: action.payload.error }
        }

        case '@auth-logout/requested': {
            return {...state, loading: true, error: undefined}
        }

        case '@auth-logout/success': {
            return {...state, success: action.payload.success, user: null, error: undefined, isAuthenticated: false,  loading: false}
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
             return { ...state }
        }
    }
}