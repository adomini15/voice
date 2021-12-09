import {Coordinates} from "../../types/Coordinates";

// google.maps
import TravelMode = google.maps.TravelMode;
import LatLng = google.maps.LatLng;
import DistanceMatrixService = google.maps.DistanceMatrixService;

export class GoogleMapsHelper {

    private constructor() {}

    static async getDistance(origin: Coordinates, destination: Coordinates, travelMode: TravelMode = TravelMode.DRIVING) {
        try {
            const distanceMService = new DistanceMatrixService()

            const feedback = await distanceMService.getDistanceMatrix({
                origins: [
                    new LatLng(origin.latitude, origin.longitude)
                ],
                destinations: [
                    new LatLng(destination.latitude, destination.longitude),
                ],
                travelMode: TravelMode.DRIVING
            })

            return {
                originAddress: feedback.originAddresses[0],
                destinationAddress: feedback.destinationAddresses[0],
                duration: feedback.rows[0].elements[0].duration.text,
                distance: feedback.rows[0].elements[0].distance.text
            }

        } catch (error) {
            throw error;
        }
    }
}