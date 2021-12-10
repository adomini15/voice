// external
import {
    IonButton,
    IonContent,
    IonHeader,
    IonIcon,
    IonInput,
    IonItem,
    IonPage,
    IonTitle,
    IonToolbar
} from '@ionic/react';
import {useSelector} from "react-redux";

// internal
import './Home.css';
import Map from "../components/Map/Map";
import TextToSpeechPlayer from "../components/speaker/TextToSpeechPlayer";
import SpeechToTextRecorder from "../components/speaker/SpeechToTextRecorder";
import SelectText from "../components/diverse/SelectText";

import {useState} from "react";

const Home: React.FC = () => {
  const user = useSelector((state:any) => state.auth.user)
    const [results, setResults] = useState<string[]>([]);

    return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
          {/*<TextToSpeechPlayer size={25} text="Fiesta en la casa de José. Descripción: Fiesta de cumpleaños de jose. Distancia: 1 metro. Tiempo de llegada: 1 minuto" lang="es-US" />*/}
          {/*<Map />*/}

          <IonItem>
              <IonInput type="text" placeholder="Colocar tu texto"/>
              <div item-right>
                  <SpeechToTextRecorder onChange={(results:any) => { setResults(results)  }} ></SpeechToTextRecorder>
              </div>
          </IonItem>

          <SelectText onChange={(selectedText:any) => console.log(selectedText)} elements={results} />

      </IonContent>
    </IonPage>
  );
};

export default Home;
