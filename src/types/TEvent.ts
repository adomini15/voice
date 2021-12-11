import {Coordinates} from "./Coordinates";

export type TEvent = {
    id?: string,
    title: string,
    description?:string,
    coordinates: Coordinates,
    arrival_time:string,
    user_id: string
}
