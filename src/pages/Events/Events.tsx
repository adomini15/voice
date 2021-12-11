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

const Events: React.FC<RouteComponentProps> = ({ history, match }) => {
    return <IonPage>
        <IonHeader>
            <IonToolbar>
                <IonTitle>Events</IonTitle>
            </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>

            <IonFab vertical="bottom" horizontal="center" color="primary" className="ion-padding" >
                <IonFabButton>
                    <TextToSpeechPlayer size={25} text="Fiesta en la casa de José. Descripción: Fiesta de cumpleaños de jose. Distancia: 1 metro. Tiempo de llegada: 1 minuto" lang="es-US" />
                </IonFabButton>
            </IonFab>


        </IonContent>
    </IonPage>
}

export default Events;