import {
    IonButton,
    IonContent,
    IonHeader,
    IonItem,
    IonLabel,
    IonPage,
    IonRouterLink,
    IonTitle,
    IonToolbar
} from "@ionic/react";
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
            <IonRouterLink  routerLink="/signup" className="ion-padding" style={{ fontSize: '0.875rem' }}>Do you don't have a user account?</IonRouterLink>
        </IonContent>
    </IonPage>
}

export default SignIn;