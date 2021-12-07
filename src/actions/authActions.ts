import {User} from "../types/User";

export const authSignUpRequested = (user: User) => ({
    type: '@auth-signup/requested',
    payload: {
        user
    }
})

export const authSignUpSuccess = (data: any) => ({
    type: '@auth-signup/success',
    payload: {
        data
    }
})

export const authSignUpFailed = (error:any) => ({
    type: '@auth-signup/failed',
    payload: {
        error
    }
})