import {TEvent} from "../../types/TEvent";

export interface EventRepository {
    getAll() : Promise<TEvent[]>
    create(event: TEvent) : Promise<TEvent>;
    update(event: TEvent) : Promise<TEvent>;
    delete(id: string) : Promise<string>;
}