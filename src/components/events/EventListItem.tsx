import {
    IonBadge,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonLabel, IonButton, IonIcon
} from "@ionic/react";
import { useHistory, useRouteMatch } from "react-router"

import { trash as del, pencil as edit } from "ionicons/icons"
import {TEvent} from "../../types/TEvent";
import {useState} from "react";
import "./EventListItem.css"
import GeographyDistanceBox from "./GeographyDistanceBox";
import {Coordinates} from "../../types/Coordinates";

const passedStyles = {
    backgroundColor: "hsl(34deg 59% 90%)"
}

const EventListItem: React.FC<{
    event: TEvent,
    userLocation: Coordinates
}> = ({ event, userLocation }) => {

    // hooks
    const history = useHistory();
    const match = useRouteMatch();

    // local states
    const [ status, setStatus ] = useState();

    // handlers
    const navigateToEdit = () => {
        history.push(`${match.url}/${event.id}/edit`)
    }

    const onDelete = () => {

    }

    return <IonCard>
        <IonCardHeader>
            <IonCardTitle>
                <div>
                    <IonLabel className="ion-margin-end">{ event.title }</IonLabel>
                    <IonBadge color="danger" slot="end" style={{ fontSize: "0.5em" }}>Passed</IonBadge>
                </div>
            </IonCardTitle>
            <IonCardSubtitle>
                { event.arrival_time }
            </IonCardSubtitle>
        </IonCardHeader>

        <IonCardContent>
            <GeographyDistanceBox origin={userLocation} destination={event.coordinates} />
            <p style={{ fontSize: "0.875rem" }}>
                { event.description }
            </p>
            <div className="ion-padding-top">
                <IonButton color="dark" fill="solid" expand="full" onClick={navigateToEdit} >
                    <IonIcon icon={edit} />
                </IonButton>
                <IonButton color="danger" fill="solid" expand="full">
                    <IonIcon icon={del} />
                </IonButton>
            </div>
        </IonCardContent>
    </IonCard>
}

export default EventListItem;