import {EventRepository} from "../repos/event/EventRepository";
import {TEvent} from "../types/TEvent";

export class EventService {
    private static _instance: EventService;
    private static _eventRepo: EventRepository;

    private constructor() {}

    public static Instance(eventRepo: EventRepository) {
        if(!EventService._instance) {
            EventService._instance = new EventService();
            EventService._eventRepo = eventRepo;
        }

        return EventService._instance;
    }

    async getAll() {
        try {
            return  await EventService._eventRepo.getAll()
        } catch (error) {
            throw error;
        }
    }

    async create(event: TEvent) {
        try {
            return  await EventService._eventRepo.create(event);
        } catch (error) {
            throw error;
        }
    }

    async update(event: TEvent) {
        try {
            return await EventService._eventRepo.update(event);
        } catch (error) {
            throw error;
        }
    }

    async delete(id:string) {
        try {
           return  await EventService._eventRepo.delete(id);
        } catch (error) {
            throw error;
        }
    }
}