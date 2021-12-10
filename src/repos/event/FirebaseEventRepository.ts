// external
import { initializeApp } from "firebase/app"
import { getFirestore, collection, getDocs, addDoc } from  "firebase/firestore"

// internal
import {EventRepository} from "./EventRepository";
import {firebaseConfig} from "../../.firebaseConfig";
import {TEvent} from "../../types/TEvent";

export class FirebaseEventRepository implements EventRepository{
    private readonly eventCollection;

    constructor() {
        this.eventCollection = collection(getFirestore(initializeApp(firebaseConfig)), "events");
    }

    async getAll(): Promise<TEvent[]> {
        try {
            const feedback = await getDocs(this.eventCollection);

            console.log(feedback);

            return [] as TEvent[];
        } catch (error) {
            throw error;
        }
    }

    async create(event: TEvent): Promise<TEvent> {
        try {
            const feedback = await addDoc(this.eventCollection, event)

            console.log(feedback);

            return {} as TEvent;
        } catch (error) {
            throw error;
        }
    }

    async delete(id: number): Promise<number> {
        try {

            return 0;
        } catch (error) {
            throw error;
        }
    }

    async update(event: TEvent): Promise<TEvent> {
        try {

             return {} as TEvent;
        } catch (error) {
            throw error;
        }
    }


}