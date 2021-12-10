// external
import {IonContent, IonHeader, IonInput, IonItem, IonPage, IonTitle, IonToolbar} from "@ionic/react";

// internal
import SpeechToTextRecorder from "../../components/speaker/SpeechToTextRecorder";
import SelectText from "../../components/diverse/SelectText";
import {useSelector} from "react-redux";
import {useState} from "react";

const CreateEvent: React.FC = () => {
    // maneging global store
    const authUser = useSelector((state:any) => state.auth.user)

    // local states
    const [results, setResults] = useState<string[]>([]);

    return <IonPage>
        <IonHeader>
            <IonToolbar>
                <IonTitle>Create Event</IonTitle>
            </IonToolbar>
        </IonHeader>

        <IonContent fullscreen>

            {/*<IonItem>*/}
            {/*    <IonInput type="text" placeholder="Colocar tu texto"/>*/}
            {/*    <div item-right>*/}
            {/*        <SpeechToTextRecorder onChange={(results:any) => { setResults(results)  }} ></SpeechToTextRecorder>*/}
            {/*    </div>*/}
            {/*</IonItem>*/}
            {/*<SelectText onChange={(selectedText:any) => console.log(selectedText)} elements={results} />*/}
        </IonContent>
    </IonPage>
}

export default CreateEvent;