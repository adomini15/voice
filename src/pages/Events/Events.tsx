// external
import {IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from "@ionic/react";
import { RouteComponentProps } from "react-router"

// internal
import './Events.css';

const Events: React.FC<RouteComponentProps> = ({ history, match }) => {
    return <IonPage>
        <IonHeader>
            <IonToolbar>
                <IonTitle>Events</IonTitle>
            </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>

        </IonContent>
    </IonPage>
}

export default Events;