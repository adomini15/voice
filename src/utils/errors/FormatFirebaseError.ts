export const FormatFirebaseError: any = {
    'auth/email-already-in-use': {
        field: 'email',
        message: 'Provided mail already used.'
    },
    'auth/invalid-email':{
        field: 'email',
        message: 'It must be a string email address.'
    },
    'auth/invalid-password': {
        field: 'password',
        message: 'It must be a string with at least six characters.'
    },
    'auth/user-not-found': {
        field: 'email',
        message: 'No existing user.'
    },
    'auth/invalid-display-name': {
        field: 'display-name',
        message:  'It must be a non-empty string.'
    },
    'auth/invalid-photo-url': {
        field: 'photo-url',
        message: 'It must be a string URL.'
    },
    'auth/wrong-password': {
        field: 'password',
        message: 'Incorrect Password'
    },
    'auth/user-token-expired': {
        field: 'token',
        message: 'User session expired'
    }
}