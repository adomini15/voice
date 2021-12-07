import {IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from "@ionic/react";
import SignUpForm from "../../components/Form/SignUpForm";


// Login Page
const Signup: React.FC = () => {

    return <IonPage>
        <IonHeader>
            <IonToolbar>
                <IonTitle>Sign Up</IonTitle>
            </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
           <SignUpForm />
        </IonContent>
    </IonPage>
}

export default  Signup;