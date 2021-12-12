import {useSelector} from "react-redux";
import {TEvent} from "../../types/TEvent";
import EventListItem from "./EventListItem";
import {useGeo} from "../../hooks/useGeo";
import {useEffect} from "react";

const EventList: React.FC<{
    events: TEvent[]
}> = ({ events }) => {
    // geo
    const { coordinates, takeCoordinates } = useGeo();

    (async function () {
        await takeCoordinates();
    })()

    // When component be mounted
    // useEffect(() => {
    //     (async function () {
    //         await takeCoordinates();
    //     })()
    // }, []);

    return <div>
        { coordinates && events &&
            events.map((event:TEvent, index:number) => (
                <EventListItem event={event} key={index} userLocation={ coordinates! } />
            ))
        }
    </div>
}

export default EventList;