import {User} from "../../types/User";

export interface AuthRepository {
    signin(user:User) : Promise<any>;
    signup(user: User) : Promise<any>;
    logout(): Promise<any>;
    updateProfile(data: any) : Promise<any>
}


