// external
import {IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from "@ionic/react";
import { RouteComponentProps } from "react-router";

// internal
import ProfileForm from "../../components/Form/ProfileForm";

const Profile: React.FC<RouteComponentProps> = ({ history }) => {
    return <IonPage>
        <IonHeader>
            <IonToolbar>
                <IonTitle>
                    Profile
                </IonTitle>
            </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
            <ProfileForm history={history} />
        </IonContent>
    </IonPage>
}

export default Profile;