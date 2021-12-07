import {Reducer} from "redux";

const initialState: {
    auth: any,
    success: any,
    loading: boolean,
    error: any
} = {
    auth: null,
    success: null,
    loading: false,
    error: null
}

export const authReducer: Reducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case '@auth-signup/requested': {
            return { ...state, loading: true }
        }

        case '@auth-signup/success': {
            return { ...state, loading: false }
        }

        case '@auth-signup/failed': {
            return { ...state, error: payload.error, loading: false }
        }

        default: {
            return 'Not Action Recognize'
        }
    }
}