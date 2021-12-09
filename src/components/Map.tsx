// external
import { withProps, compose } from "recompose";
import { withGoogleMap, withScriptjs, GoogleMap, Marker } from "react-google-maps"
import MapTypeId = google.maps.MapTypeId;
import MapMouseEvent = google.maps.MapMouseEvent;

// internal
import {useGeo} from "../hooks/useGeo";
import {useEffect} from "react";
import {googleMapsConfig} from "../googleMapsConfig";
import {IonSpinner} from "@ionic/react";

const Map: React.FC = (props) => {
    const { coordinates, takeCoordinates, setCoordinates } = useGeo();

    // component mounted
    useEffect(() => {
        (async function (){
           try {
               await takeCoordinates();
           } catch (error) {
               console.log(error)
           }
        })();
    }, [])

    // handlers
    const onMapMouseChange = ({latLng}: MapMouseEvent) => {
        if (latLng) {
            setCoordinates({
                latitude: latLng.lat(),
                longitude: latLng.lng()
            })
        }

    }

    return <div>
        {
            coordinates &&
            <GoogleMap
                defaultZoom={100}
                defaultCenter={{
                    lat: coordinates.latitude,
                    lng: coordinates.longitude
                }}
                onClick={onMapMouseChange}
                defaultMapTypeId={ MapTypeId.SATELLITE }
            >
                <Marker position={{
                            lat: coordinates.latitude,
                            lng: coordinates.longitude
                        }}

                >

                </Marker>
            </GoogleMap>
        }
    </div>
}

export default compose(
    withProps({
        googleMapURL: googleMapsConfig.URL,
        containerElement: <div style={{ height: '400px' }}></div>,
        mapElement: <div style={{ height: '100%'}}></div>,
        loadingElement: <IonSpinner name="crescent" />
    }),
    withScriptjs,
    withGoogleMap)(Map);