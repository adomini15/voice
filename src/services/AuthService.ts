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
            return await AuthService._authRepo.signup(user);
        } catch (error) {
            throw error;
        }
    }

    async signin(user:User) : Promise<any> {
        try {
            return  await AuthService._authRepo.signin(user);
        } catch (error) {
            throw error;
        }
    }

    async logout() : Promise<any> {
        try {
            return await AuthService._authRepo.logout()
        } catch (error) {
            throw error;
        }
    }

    async updateProfile(data: any) : Promise<any>{
        try {
            return await AuthService._authRepo.updateProfile(data)
        } catch (error) {
            throw error;
        }
    }


}