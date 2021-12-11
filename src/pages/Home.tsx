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
import {useGeo} from "../hooks/useGeo";

const Home: React.FC = () => {

    return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
          {/*<TextToSpeechPlayer size={25} text="Fiesta en la casa de José. Descripción: Fiesta de cumpleaños de jose. Distancia: 1 metro. Tiempo de llegada: 1 minuto" lang="es-US" />*/}
      </IonContent>
    </IonPage>
  );
};

export default Home;
