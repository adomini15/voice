// external
import {useState} from "react";

// internal
import {Coordinates} from "../types/Coordinates";
import {GeolocationHelper} from "../utils/geo/GeolocationHelper";

export const useGeo = () => {
    const [coordinates, setCoordinates] = useState<Coordinates>()
    const [permissionStatus, setPermissionStatus] = useState<'ACCEPTED' | 'DENIED' | null>(null);

    const takeCoordinates = async () => {
        const coords = await GeolocationHelper.getCurrentPosition();
        setCoordinates({ latitude: coords.latitude, longitude: coords.longitude })
    }

    const takePermissions = async () => {
        try {
            const permissionStatus = await GeolocationHelper.requestPermission();
            setPermissionStatus(permissionStatus);
        } catch (error) {
            throw error;
        }
    }

    return {
        coordinates,
        permissionStatus,
        takeCoordinates,
        takePermissions
    }
}