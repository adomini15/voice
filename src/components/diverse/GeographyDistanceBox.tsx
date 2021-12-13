import {IonItem, IonLabel, IonNote, IonThumbnail} from "@ionic/react";
import place from "../../Place.png";

const GeographyDistanceBox: React.FC<{
    distance: string,
    duration: string
}> = ({ distance, duration }) => {

    return <IonItem className="ion-padding-bottom" >
            <IonThumbnail slot="start" >
                <img src={place}/>
            </IonThumbnail>
            <div className="ion-padding" >
                <div>
                    <IonLabel color="dark" style={{padding: "0.75em 0", fontSize: "0.875rem", fontWeight: 'bold'}}>
                        Distancia
                    </IonLabel>
                    <IonNote>
                        {distance}
                    </IonNote>

                    <IonLabel color="dark" style={{padding: "0.75em 0", fontSize: "0.875rem", fontWeight: 'bold'}}>
                        Duración
                    </IonLabel>
                    <IonNote>
                        {duration}
                    </IonNote>
                </div>
            </div>
    </IonItem>

}

export default GeographyDistanceBox;