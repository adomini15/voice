import {Coordinates} from "./Coordinates";

export type TEvent = {
    id?: string,
    title: string,
    description?:string,
    coordinates: Coordinates,
    arrival_time:Date,
    user_id: string
}
