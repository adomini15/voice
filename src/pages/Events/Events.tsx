// external
import {
    IonButton,
    IonContent,
    IonHeader, IonIcon,
    IonPage,
    IonTitle,
    IonToolbar
} from "@ionic/react";
import {useSelector} from "react-redux";
import { RouteComponentProps } from "react-router"

// icons
import { create } from "ionicons/icons";

// internal
import './Events.css';
import EventList from "../../components/events/EventList";
import {useEffect, useState} from "react";
import {TEvent} from "../../types/TEvent";

const Events: React.FC<RouteComponentProps> = ({ history, match }) => {
    // authenticated user
    const authUser = useSelector((state:any) => state.auth.user);
    
    // global store
    const events:TEvent[] = useSelector((state:any) => state.event.events);

    // local states
    const [filteredEvents, setFilteredEvents] = useState<TEvent[] | null>(null);

    // effects
    useEffect(() => {
        if (authUser && events) {
            setFilteredEvents( events.filter((event => event.user_id == authUser.uid))  );
        }
    }, [authUser, events]);

    // handlers
    const onNavigateNewEvent = () => {
        history.push(`${match.url}/create`);
    }

    return <IonPage>
        <IonHeader>
            <IonToolbar>
                <IonTitle>Events</IonTitle>
            </IonToolbar>
            <IonToolbar color="primary" className="ion-padding-horizontal">
                <div style={{ display:"flex", justifyContent: "space-between", alignItems: "center" }}>
                    <b>Create Event</b>
                    <IonButton onClick={onNavigateNewEvent}>
                        <IonIcon icon={create} />
                    </IonButton>
                </div>
            </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>

            {/*<IonFab vertical="bottom" horizontal="center" color="primary" className="ion-padding" >*/}
            {/*    <IonFabButton>*/}
            {/*    </IonFabButton>*/}
            {/*</IonFab>*/ }

            {
                filteredEvents && <EventList events={filteredEvents} />
            }

        </IonContent>
    </IonPage>
}

export default Events;