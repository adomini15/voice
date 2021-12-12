// external
import {IonBackButton, IonButtons, IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from "@ionic/react";
import { RouteComponentProps } from "react-router"
import {useSelector} from "react-redux";

// internal
import EventForm from "../../components/Form/EventForm";
import {TEvent} from "../../types/TEvent";
import {eventUpdateRequested} from "../../actions/eventActions";

const EditEvent: React.FC<RouteComponentProps> = ({ history, match,location }) => {
    const {id} = match.params as any;

    // global store
    const event = useSelector((state:any) => (
        state.event.events?.filter((event: TEvent) => event.id == id)[0]
    ))

    return <IonPage>
        <IonHeader>
            <IonToolbar>
                <IonButtons slot="start">
                    <IonBackButton defaultHref="/"></IonBackButton>
                </IonButtons>
                <IonTitle>
                    Edit Event
                </IonTitle>
            </IonToolbar>
        </IonHeader>
        <IonContent>
            { event != null && <EventForm history={history} initialValues={event} eventDispatchAction={eventUpdateRequested}/>}
        </IonContent>
    </IonPage>
}

export default EditEvent;