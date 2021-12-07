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
            AuthService._authRepo = authRepository;
        }

        return AuthService._instance;
    }
    
    getAuthenticatedUser ()  {
        try {
            return AuthService._authRepo.getAuthenticatedUser();
        } catch (error) {
            throw error;
        }
    }

    async signup (user:User) : Promise<any> {
        try {
            const data = await AuthService._authRepo.signup(user);
            return data;
        } catch (error) {
            throw error;
        }
    }

    async signin(user:User) : Promise<any> {
        try {
            const data = await AuthService._authRepo.signin(user);
            return data;
        } catch (error) {
            throw error;
        }
    }

    async logout() : Promise<any> {
        try {
            const data = await AuthService._authRepo.logout()
            return data;
        } catch (error) {
            throw error;
        }
    }


}