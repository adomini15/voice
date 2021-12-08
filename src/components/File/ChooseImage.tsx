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
        <IonButton color="dark" fill={ photo ? 'solid' : 'outline'} onClick={takePhoto}>
            {
                photo ? <><IonIcon icon={imageOutline} style={{ marginRight: "0.5rem" }} /> Edit Image</> : 'Select Image'
            }
        </IonButton>
    </div>
}

export default  ChooseImage;