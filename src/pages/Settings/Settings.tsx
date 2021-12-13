// external
import {IonAlert, IonButton, IonContent, IonHeader, IonIcon, IonPage, IonTitle, IonToolbar} from "@ionic/react";
import {useDispatch} from "react-redux";

// icons
import { exit } from "ionicons/icons"

// internal
import {authLogoutRequested} from "../../actions/authActions";
import {useState} from "react";

const Settings: React.FC = () => {
    const dispatch = useDispatch();

    // local states
    const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);

    const OnLogout = () => {
        dispatch(authLogoutRequested())
    }

     return <IonPage>
        <IonHeader>
            <IonToolbar>
                <IonTitle>
                    Settings
                </IonTitle>
            </IonToolbar>
        </IonHeader>

        <IonContent fullscreen>
            <IonButton expand="full" color="dark" onClick={ () => setShowLogoutConfirm(true) } >
                <IonIcon icon={exit} />
                Log out
            </IonButton>
        </IonContent>

        <IonAlert
            isOpen={showLogoutConfirm}
            onDidDismiss={() => setShowLogoutConfirm(false)}
            header={'Confirm'}
            message={'Are you sure to exit?'}
            buttons={[{
                text: 'Cancel',
                role: 'cancel',
            }, {
                text: 'OK',
                role: 'ok',
                handler: () => {
                    OnLogout()
                }
            }]}
        />
    </IonPage>
}

export default Settings;