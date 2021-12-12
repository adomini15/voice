import EventListItem from "./EventListItem";
import {useGeo} from "../../hooks/useGeo";
import {TEvent} from "../../types/TEvent";
import {useEffect} from "react";
import {IonSpinner} from "@ionic/react";

const EventList: React.FC<{
    events: TEvent[]
}> = ({ events }) => {

    // custom hooks
    const { coordinates, takeCoordinates } = useGeo();

    // when component be mounted
    useEffect(() => {
        (async function() {
            await takeCoordinates();
        })()
    }, []);


    return <div>
        { (coordinates && events?.map((event, index:number) => (
                <EventListItem event={event} userLocation={coordinates} key={index} />
            ))) || <IonSpinner name="crescent" />
        }

    </div>
}

export default EventList;