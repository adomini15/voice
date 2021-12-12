// external
import {IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonBackButton, IonButtons} from "@ionic/react";
import { RouteComponentProps } from "react-router"
// internal
import EventForm from "../../components/Form/EventForm";
import {eventCreateRequested} from "../../actions/eventActions";
import {TEvent} from "../../types/TEvent";
import {useEffect, useState} from "react";
import {useGeo} from "../../hooks/useGeo";
import {useSelector} from "react-redux";

const initialValues: TEvent = {
    title: '',
    description: '',
    arrival_time: new Date().toISOString(),
    coordinates: {
        longitude: 0,
        latitude:0
    },
    user_id: ''
}

const CreateEvent: React.FC<RouteComponentProps> = ({ history, match, location }) => {
    // geolocation
    const { coordinates, permissionStatus, takeCoordinates, takePermissions } = useGeo();

    // global store
    const authUser = useSelector((state:any) => state.auth.user);

    // local states
    const [event, setEvent] = useState<TEvent | null>(null)

    // for test
    // const [authUser, setAuthUser] = useState({
    //     uid: 'blablablabla'
    // })

    // when user be available
    useEffect(() => {
            (async function() {
                try {
                    await takePermissions();
                    await takeCoordinates();
                } catch (error:any) {
                    console.log(error)
                }
            })();

    }, [])


    useEffect(() => {
        if (coordinates && permissionStatus == 'ACCEPTED' && authUser) {
            setEvent({ ...initialValues, coordinates, user_id: authUser.uid })
        }
    }, [coordinates, permissionStatus, authUser])

    // handlers
    return <IonPage>
        <IonHeader>
            <IonToolbar>
                <IonButtons slot="start">
                    <IonBackButton defaultHref="/"></IonBackButton>
                </IonButtons>
                <IonTitle>Create Event</IonTitle>
            </IonToolbar>
        </IonHeader>

        <IonContent fullscreen>
            { event != null && <EventForm history={history} initialValues={ event } eventDispatchAction={ eventCreateRequested } /> }
        </IonContent>

    </IonPage>
}

export default CreateEvent;