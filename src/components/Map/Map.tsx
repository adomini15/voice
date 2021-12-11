// external
import {compose, withProps} from "recompose";
import { withGoogleMap, withScriptjs, GoogleMap, Marker } from "react-google-maps"


// internal
import {useGeo} from "../../hooks/useGeo";
import {useEffect} from "react";
import {googleMapsConfig} from "../../.googleMapsConfig";
import {IonSpinner} from "@ionic/react";
import {Coordinates} from "../../types/Coordinates";

const Map:React.FC<{
    defaultCoordinates: Coordinates,
    onChange: Function
}> = ({ defaultCoordinates, onChange }) => {

    // handlers
    const onClick = ({latLng}: google.maps.MapMouseEvent) => {
        if (latLng) {
            const coordinates:Coordinates = {
                latitude: latLng.lat(),
                longitude: latLng.lng()
            }

            onChange(coordinates)
        }

    }

    return <div>
        {
            defaultCoordinates &&
            <GoogleMap
                defaultZoom={100}
                defaultCenter={{
                    lat: defaultCoordinates.latitude,
                    lng: defaultCoordinates.longitude
                }}
                onClick={onClick}
                defaultMapTypeId={ google.maps.MapTypeId.SATELLITE }
            >
                <Marker position={{
                            lat: defaultCoordinates.latitude,
                            lng: defaultCoordinates.longitude
                        }}

                >

                </Marker>
            </GoogleMap>
        }
    </div>
}

export default withProps({
        googleMapURL: googleMapsConfig.URL,
        containerElement: <div style={{ height: '400px' }}></div>,
        mapElement: <div style={{ height: '100%'}}></div>,
        loadingElement: <IonSpinner name="crescent" />,
    })(withScriptjs(withGoogleMap(Map)));