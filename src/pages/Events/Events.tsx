// external
import {
    IonContent,
    IonFab,
    IonFabButton,
    IonFooter,
    IonHeader,
    IonLabel,
    IonPage, IonTabs,
    IonTitle,
    IonToolbar
} from "@ionic/react";
import { RouteComponentProps } from "react-router"

// internal
import './Events.css';
import TextToSpeechPlayer from "../../components/speaker/TextToSpeechPlayer";
import {useSelector} from "react-redux";
import EventList from "../../components/events/EventList";

const Events: React.FC<RouteComponentProps> = ({ history, match }) => {
    // global store
    const events = useSelector((state:any) => state.event.events);

    return <IonPage>
        <IonHeader>
            <IonToolbar>
                <IonTitle>Events</IonTitle>
            </IonToolbar>
            <IonToolbar color="primary">
                <div className="ion-padding-start">
                    <TextToSpeechPlayer text="Bienvenidos sean seres de dios" lang="es-ES" size={15} />
                </div>
            </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>

            {/*<IonFab vertical="bottom" horizontal="center" color="primary" className="ion-padding" >*/}
            {/*    <IonFabButton>*/}
            {/*    </IonFabButton>*/}
            {/*</IonFab>*/}

            {
               events && <EventList events={events} />
            }

        </IonContent>
    </IonPage>
}

export default Events;