// external
import { Loader } from "@googlemaps/js-api-loader"

// internal
import {Coordinates} from "../../types/Coordinates";
import {DistanceInformation} from "../../types/DistanceInformation";
import {googleMapsConfig} from "../../.googleMapsConfig";

const loader = new Loader({
    apiKey: googleMapsConfig.API_KEY,
    libraries: ["places"]
})

export class GoogleMapsHelper {
    private constructor() {}

    static async getDistance(origin: Coordinates, destination: Coordinates)
        : Promise<DistanceInformation> {

        try {
            const google = await loader.load();

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

            //
            // return  {
            //     distance: '2',
            //     duration: '2',
            //     destinationAddress: '',
            //     originAddress: ''
            // }

        } catch (error) {
            throw error;
        }
    }
}