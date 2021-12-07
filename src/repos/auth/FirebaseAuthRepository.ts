import {AuthRepository} from "./AuthRepository";
import {initializeApp} from "firebase/app";
import { getAuth, Auth, createUserWithEmailAndPassword, UserCredential } from "firebase/auth";
import {firebaseConfig} from "../../.firebaseConfig";
import {User} from "../../types/User";

export class FirebaseAuthRepository implements AuthRepository {
    private readonly auth: Auth;

    constructor() {
        this.auth = getAuth(initializeApp(firebaseConfig));
    }

    public async login() {
        try {

        } catch (error) {
            throw error;
        }
    }

    public async signup(user:User)  {
        const { email, password } = user;

        try {
            const userCredential: UserCredential =  await createUserWithEmailAndPassword(this.auth, email, password);

            return userCredential;

        } catch (error) {
            throw error;
        }
    }

    async logout() {
    }



}