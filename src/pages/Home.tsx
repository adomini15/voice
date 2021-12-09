// external
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import {useSelector} from "react-redux";

// internal
import './Home.css';
import Map from "../components/Map";

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
          <Map />
      </IonContent>
    </IonPage>
  );
};

export default Home;
