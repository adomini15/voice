import {User} from "../../types/User";

export interface AuthRepository {
    getAuthenticatedUser() : any
    signin(user:User) : Promise<any>;
    signup(user: User) : Promise<any>;
    logout(): Promise<any>;
}


