// external
import { Geolocation } from "@capacitor/geolocation";
import {useState} from "react";
import {Coordinates} from "../types/Coordinates";

// internal

export const useGeo = () => {
    const [coordinates, setCoordinates] = useState<Coordinates>()

    const takeCoordinates = async () => {
        const { coords } = await Geolocation.getCurrentPosition();
        setCoordinates({ latitude: coords.latitude, longitude: coords.longitude })
    }

    return {
        coordinates,
        takeCoordinates,
        setCoordinates
    }
}