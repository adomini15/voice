import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Home.css';
import {useSelector} from "react-redux";
import {stat} from "fs";
import ChooseImage from "../components/File/ChooseImage";

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
          <ChooseImage onChange={(photo:any) => console.log(photo.size)} />
      </IonContent>
    </IonPage>
  );
};

export default Home;
