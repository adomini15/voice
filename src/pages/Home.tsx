// external
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import {useSelector} from "react-redux";

// internal
import './Home.css';
import Map from "../components/Map/Map";
import TextToSpeechPlayer from "../components/speaker/TextToSpeechPlayer";

const Home: React.FC = () => {
  const user = useSelector((state:any) => state.auth.user)

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
          <TextToSpeechPlayer size={50} text="Evento:Fiesta en la casa de José. Descripción: Fiesta de cumpleaños de jose. Distancia: 1 metro. Tiempo de llegada: 1 minuto" lang="es-US" />
          <Map />
      </IonContent>
    </IonPage>
  );
};

export default Home;
