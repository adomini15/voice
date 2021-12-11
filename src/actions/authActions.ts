import {User} from "../types/User";

// auth user actions
export const authUser = (user: any) => ({
    type: '@auth-user',
    payload: {
        user
    }
})

// auth signup actions
export const authSignUpRequested = (user: User) => ({
    type: '@auth-signup/requested',
    payload: {
        user
    }
})

export const authSignUpSuccess = (success: string) => ({
    type: '@auth-signup/success',
    payload: {
        success
    }
})

export const authSignUpFailed = (error:any) => ({
    type: '@auth-signup/failed',
    payload: {
        error
    }
})

// auth sign-in actions
export const authSignInRequested = (user: User) => ({
    type: '@auth-sign-in/requested',
    payload: {
        user
    }
})

export const authSignInSuccess = (success: any) => ({
    type: '@auth-sign-in/success',
    payload: {
        success
    }
})

export const authSignInFailed = (error:any) => ({
    type: '@auth-sign-in/failed',
    payload: {
        error
    }
})

// auth logout actions
export const authLogoutRequested = () => ({
    type: '@auth-logout/requested'
})

export const authLogoutSuccess = (success: any) => ({
    type: '@auth-logout/success',
    payload: {
        success
    }
})

export const authLogoutFailed = (error: any) => ({
    type: '@auth-logout/failed',
    payload: {
        error
    }
})

// auth update profile actions
export const authUpdateProfileRequested = (data: any) => ({
    type: '@auth-update-profile/requested',
    payload: {
        data
    }
})

export const authUpdateProfileSuccess = (data: any) => ({
    type: '@auth-update-profile/success',
    payload: {
        data
    }
})

export const authUpdateProfileFailed = (error: any) => ({
    type: '@auth-update-profile/failed',
    payload: {
        error
    }
})