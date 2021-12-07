import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Home.css';
import {useSelector} from "react-redux";
import {stat} from "fs";

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
          {
              JSON.stringify(user)
          }
      </IonContent>
    </IonPage>
  );
};

export default Home;
