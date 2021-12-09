import {Coordinates} from "../../types/Coordinates";


export class GoogleMapsHelper {

    private constructor() {}

    static async getDistance(origin: Coordinates, destination: Coordinates, travelMode: google.maps.TravelMode = google.maps.TravelMode.DRIVING) {
        try {
            const distanceMService = new google.maps.DistanceMatrixService()

            const feedback = await distanceMService.getDistanceMatrix({
                origins: [
                    new google.maps.LatLng(origin.latitude, origin.longitude)
                ],
                destinations: [
                    new google.maps.LatLng(destination.latitude, destination.longitude),
                ],
                travelMode: google.maps.TravelMode.DRIVING
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