// external
import { Geolocation, GeolocationPermissionType } from "@capacitor/geolocation";

// internal
import { Coordinates } from "../../types/Coordinates";
import {Capacitor} from "@capacitor/core";

export class GeolocationHelper {
    private constructor() {

    }

    static async getCurrentPosition() : Promise<Coordinates> {
        try {
            const { coords: { latitude, longitude } } = await Geolocation.getCurrentPosition();

            return {
                latitude,
                longitude
            }
        } catch (error) {
            throw error;
        }
    }

    static async requestPermission() : Promise<'ACCEPTED' | 'DENIED'> {
        try {

            if (Capacitor.getPlatform() != 'web') {
                await Geolocation.requestPermissions({
                    permissions: ['location', 'coarseLocation']
                });
            }

            return 'ACCEPTED';
        } catch (error) {
            console.log(error);
            return 'DENIED';
        }
    }
}