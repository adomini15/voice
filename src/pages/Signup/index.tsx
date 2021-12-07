import {IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from "@ionic/react";
import { RouteComponentProps } from "react-router"

import SignUpForm from "../../components/Form/SignUpForm";


// Login Page
const Signup: React.FC<RouteComponentProps> = ({ history, match, location }) => {

    return <IonPage>
        <IonHeader>
            <IonToolbar>
                <IonTitle>Sign Up</IonTitle>
            </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
           <SignUpForm history={history} />
        </IonContent>
    </IonPage>
}

export default  Signup;