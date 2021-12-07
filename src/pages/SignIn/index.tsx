import {IonButton, IonContent, IonHeader, IonItem, IonLabel, IonPage, IonTitle, IonToolbar} from "@ionic/react";
import { RouteComponentProps } from "react-router";

// style file
import './index.css';
import SignInForm from "../../components/Form/SignInForm";


// Login Page
const SignIn: React.FC<RouteComponentProps> = ({ history, match,location }) => {

    return <IonPage>
        <IonHeader>
            <IonToolbar>
                <IonTitle>Login</IonTitle>
            </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
                <SignInForm history={history} />
        </IonContent>
    </IonPage>
}

export default SignIn;