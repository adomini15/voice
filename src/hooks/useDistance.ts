import {Coordinates} from "../types/Coordinates";
import {GoogleMapsHelper} from "../utils/geo/GoogleMapsHelper";
import {useEffect, useState} from "react";
import {DistanceInformation} from "../types/DistanceInformation";

export const useDistance = () => {
    const [distanceInformation, setDistanceInformation] = useState<DistanceInformation | null>(null);

    const takeDistanceInformation = async (origin: Coordinates, destination: Coordinates) => {
        try {
            const feedback = await GoogleMapsHelper.getDistance(origin, destination);
            setDistanceInformation(feedback);
        } catch (error) {
            throw error;
        }
    }

    return {
        takeDistanceInformation,
        distanceInformation
    }
}