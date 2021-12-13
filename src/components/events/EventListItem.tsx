// external
import {
    IonBadge,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonLabel, IonButton, IonIcon, IonSpinner, IonAlert
} from "@ionic/react";
import { useHistory, useRouteMatch } from "react-router";
import {useEffect, useState} from "react";

// icons
import { trash as del, pencil as edit } from "ionicons/icons";

// internal
import {TEvent} from "../../types/TEvent";
import "./EventListItem.css"
import GeographyDistanceBox from "../diverse/GeographyDistanceBox";
import {Coordinates} from "../../types/Coordinates";
import TextToSpeechPlayer from "../speaker/TextToSpeechPlayer";
import {DistanceInformation} from "../../types/DistanceInformation";
import {GoogleMapsHelper} from "../../utils/geo/GoogleMapsHelper";

// momentjs
import moment from "moment";
import 'moment/locale/es';
import {useDispatch} from "react-redux";
import {eventDeleteRequested} from "../../actions/eventActions";
import WeatherWidget from "../diverse/WeatherWidget";
import {useWeather} from "../../hooks/useWeather";


const EventListItem: React.FC<{
    event: TEvent,
    userLocation: Coordinates
}> = ({ event, userLocation}) => {
    // transforming event
    const formatArrivalTime = moment(event.arrival_time).fromNow();
    const diffInMinutes = moment(event.arrival_time).diff(moment(new Date()), "minutes");
    let status:any;


    if(diffInMinutes > 1440) {
        status = {
            toSpeech: "en progreso",
            toStatusBadge: "En progreso",
            color: "dark"
        }
    } else if(diffInMinutes < 0 ) {
        status = {
            toSpeech: "olvidado",
            toStatusBadge: "Olvidado",
            color: "danger"
        };
    } else {
        status = {
            toSpeech: "para hoy",
            toStatusBadge: "Hoy",
            color: "primary"
        };
    }

    const dispatch = useDispatch();

    // hooks
    const history = useHistory();
    const match = useRouteMatch();
    const { weather, takeWeather } = useWeather();

    // local states
    const [textToSpeechEntry, setTextToSpeechEntry] = useState<string | null>(null);
    const [distanceInfo, setDistanceInfo ] = useState<DistanceInformation>()
    const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
    const [eliminationStatus, setEliminationStatus] = useState(false);

    // when component be mounted
    useEffect(() => {
        (async function () {
            await takeWeather(userLocation)
        })();

    }, []);

    useEffect(() => {
        (async function () {
           if (distanceInfo) {
               setTextToSpeechEntry(`Evento ${status.toSpeech}: ${event.title}. Realizado ${formatArrivalTime}, a ${distanceInfo.distance} o ${distanceInfo.duration} de distancia.`)
           } else {
               setDistanceInfo(await GoogleMapsHelper.getDistance( userLocation, event.coordinates))
           }
        })()
    }, [distanceInfo]);

    // handlers
    const navigateToEdit = () => {
        history.push(`${match.url}/${event.id}/edit`)
    }

    const onDelete = (id:string) => {
        dispatch(eventDeleteRequested(id))
    }

    return <IonCard>
        <IonCardHeader className="ion-justify-content-between" style={{ display: 'flex', gap: "2rem" }} >
            <div>
                <IonCardTitle className="ion-margin-bottom">
                    <div>
                        <IonLabel className="ion-margin-end">{ event.title }</IonLabel>
                        <IonBadge color={status.color} slot="end" style={{ fontSize: "0.5em" }}>{status.toStatusBadge}</IonBadge>
                    </div>
                </IonCardTitle>
                <IonCardSubtitle>
                    <div>
                        <b>Realizado: </b>{ formatArrivalTime }
                    </div>
                </IonCardSubtitle>
            </div>
            <div>
                {   textToSpeechEntry ?
                    <TextToSpeechPlayer text={textToSpeechEntry} lang="es-US" size={25} /> :
                    <IonSpinner name="crescent" />
                }
            </div>
        </IonCardHeader>

        <IonCardContent>
            {
                distanceInfo ?
                <GeographyDistanceBox distance={ String(distanceInfo.distance) } duration={ String(distanceInfo.duration) }  /> :
                    <IonSpinner name="crescent" />
            }

            {
                status.toStatusBadge.toLowerCase().includes('hoy') && (
                    weather ? <WeatherWidget weather={weather} /> : <IonSpinner name="crescent" />
                )
            }

            <p style={{ fontSize: "0.875rem" }}>
                <p className="ion-padding-bottom"><b>Descripción:</b></p>{ event.description }
            </p>
            <div className="ion-padding-top">
                <IonButton color="dark" fill="solid" expand="full" onClick={navigateToEdit} >
                    <IonIcon icon={edit} />
                </IonButton>
                <IonButton color="dark" fill="outline" expand="full" onClick={() => setShowDeleteConfirm(true)}>
                    <IonIcon icon={del} />
                </IonButton>
            </div>

            {/* when confirm a event elimination */}
            <IonAlert
                isOpen={showDeleteConfirm}
                onDidDismiss={() => setShowDeleteConfirm(false)}
                header={'Confirm'}
                subHeader={`"${event.title}"`}
                message={'Are you sure to delete this event?'}
                buttons={[{
                    text: 'Cancel',
                    role: 'cancel',
                }, {
                    text: 'Delete',
                    role: 'delete',
                    handler: () => {
                        onDelete(event.id!)
                        setEliminationStatus(true);
                    }
                }]}
            />

            {/* when a event was deleted  */}
            <IonAlert
                isOpen={eliminationStatus}
                onDidDismiss={() => setEliminationStatus(false)}
                header={'Event deleted successfully'}
                buttons={['OK']}
            />
        </IonCardContent>
    </IonCard>
}

export default EventListItem;