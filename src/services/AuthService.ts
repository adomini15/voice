import {AuthRepository} from "../repos/auth/AuthRepository";
import {User} from "../types/User";

export class AuthService {
    private static _instance: AuthService;
    private static _authRepo: AuthRepository;

    private constructor() {}

    // Using Singleton
    public static Instance (authRepository: AuthRepository){
        if(!AuthService._instance) {
            AuthService._instance = new AuthService();
        }

        AuthService._authRepo = authRepository;

        return AuthService._instance;
    }

    async signup (user:User) {
        try {
            const res = await AuthService._authRepo.signup(user);

            console.log(res);
        } catch (error) {
            throw error;
        }
    }


}