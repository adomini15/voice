import {IonButton, IonIcon} from "@ionic/react";
import {usePhoto} from "../../hooks/usePhoto";
import {useEffect} from "react";

// icons
import { imageOutline } from "ionicons/icons"


const ChooseImage: React.FC<{
    onChange: Function
}> = ({ onChange }) => {
    const { photo, takePhoto } = usePhoto();

    useEffect(() => {
        if(photo) {
            onChange(photo);
        }
    }, [photo]);

    return <div className="ion-padding">
        <IonButton fill="outline"  size="small" onClick={takePhoto}>
           <IonIcon icon={imageOutline} style={{ marginRight: "0.5rem" }} /> Choose Image
        </IonButton>
    </div>
}

export default  ChooseImage;