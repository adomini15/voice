import {IonButton, IonIcon} from "@ionic/react";
import {usePhoto} from "../../hooks/usePhoto";
import {useEffect} from "react";

// icons
import { imageOutline } from "ionicons/icons"


const ChooseImage: React.FC<{
    onChange: Function,
    onLoading: Function
}> = ({ onChange, onLoading }) => {
    const { photo, takePhoto, loadingPhoto } = usePhoto();

    useEffect(() => {
        if(photo) {
            onChange(photo);
        }
    }, [photo]);

    useEffect(() => {
        onLoading(loadingPhoto)
    }, [loadingPhoto])

    return <div className="ion-padding">
        <IonButton fill="outline"  size="small" onClick={takePhoto}>
           <IonIcon icon={imageOutline} style={{ marginRight: "0.5rem" }} /> Choose Image
        </IonButton>
    </div>
}

export default  ChooseImage;