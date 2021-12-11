// external
import { initializeApp } from "firebase/app"
import { getFirestore, collection, doc, getDocs, addDoc, getDoc, updateDoc } from  "firebase/firestore"

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
            const events: TEvent[] = [];
            const querySnapshot = await getDocs(this.eventCollection);

            // map events result
            querySnapshot.forEach((feedback) => {
                events.push({
                    id: feedback.id,
                    title: feedback.get('title'),
                    description: feedback.get('description'),
                    arrival_time: feedback.get('arrival_time'),
                    coordinates: feedback.get('coordinates'),
                    user_id: feedback.get('user_id'),
                })
            })

            return events;
        } catch (error) {
            throw error;
        }
    }

    async create(event: TEvent): Promise<TEvent> {
        try {
            const feedback = await getDoc(await addDoc(this.eventCollection, event));

            return {
                id: feedback.id,
                title: feedback.get('title'),
                description: feedback.get('description'),
                arrival_time: feedback.get('arrival_time'),
                coordinates: feedback.get('coordinates'),
                user_id: feedback.get('user_id'),
            };

        } catch (error) {
            throw error;
        }
    }


    async update(event: TEvent): Promise<TEvent> {
        try {
            const docRef = await doc(this.eventCollection, event.id);

            await updateDoc(docRef, {
                title: event.title,
                description: event.description,
                arrival_time: event.arrival_time,
                coordinates: event.coordinates,
            })

            const feedback = await getDoc(docRef);

            return {
                id: feedback.id,
                title: feedback.get('title'),
                description: feedback.get('description'),
                arrival_time: feedback.get('arrival_time'),
                coordinates: feedback.get('coordinates'),
                user_id: feedback.get('user_id'),
            };

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


}