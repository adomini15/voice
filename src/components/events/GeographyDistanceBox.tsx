import {IonItem, IonLabel, IonNote, IonThumbnail} from "@ionic/react";
import place from "../../Place.png";
import {Coordinates} from "../../types/Coordinates";
import {useDistance} from "../../hooks/useDistance";
import {useEffect} from "react";

const GeographyDistanceBox: React.FC<{
    origin: Coordinates,
    destination: Coordinates
}> = ({ origin, destination }) => {

    // hooks
    const {distanceInformation, takeDistanceInformation} = useDistance();

    // when component be mounted
    useEffect(() => {

        (async function() {
            await takeDistanceInformation(origin, destination);
        })()

    }, []);


    return <>
        {distanceInformation && (<IonItem className="ion-padding-bottom">
            <IonThumbnail slot="start">
                <img src={place}/>
            </IonThumbnail>
            <div className="ion-padding">
                <div>
                    <IonLabel color="primary" style={{padding: "0.75em 0", fontSize: "0.875rem", fontWeight: 'bold'}}>
                        Distancia
                    </IonLabel>
                    <IonNote>
                        {distanceInformation.distance}
                    </IonNote>

                    <IonLabel color="primary" style={{padding: "0.75em 0", fontSize: "0.875rem", fontWeight: 'bold'}}>
                        Tiempo de llegada
                    </IonLabel>
                    <IonNote>
                        {distanceInformation.duration}
                    </IonNote>
                </div>
            </div>
    </IonItem>)}
    </>
}

export default GeographyDistanceBox;