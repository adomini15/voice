import {initializeApp} from "firebase/app";
import { getAuth, Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import {firebaseConfig} from "../../.firebaseConfig";
import {User} from "../../types/User";
import {AuthRepository} from "./AuthRepository";

export class FirebaseAuthRepository implements AuthRepository {
    private readonly auth: Auth;

    constructor() {
        this.auth = getAuth(initializeApp(firebaseConfig));
    }

    public getAuthenticatedUser() {
        try {
            return this.auth.currentUser;
        } catch (error) {
            throw error;
        }
    }

    public async signin(user:User) {
        const { email, password } = user;

        try {
            await signInWithEmailAndPassword(this.auth, email, password);
            return this.auth.currentUser;
        } catch (error) {
            throw error;
        }
    }

    public async signup(user:User)  {
        const { email, password } = user;

        try {
            await createUserWithEmailAndPassword(this.auth, email, password);
            return this.auth.currentUser;
        } catch (error) {
            throw error;
        }
    }

    async logout() {
        try {
            await signOut(this.auth);
            return true;
        } catch (error) {
            throw error;
        }
    }

    async updateProfile(data: any) {
        try {

        } catch (error) {
            throw error;
        }
    }

}