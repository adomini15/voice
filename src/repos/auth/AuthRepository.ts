import {User} from "../../types/User";

export interface AuthRepository {
    login() : Promise<any>;
    signup(user: User) : Promise<any>;
    logout(): Promise<any>;
}


