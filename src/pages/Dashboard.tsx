// external
import {
    IonPage, IonRouterOutlet,
} from '@ionic/react';
import {Redirect, Route} from "react-router-dom";
import { RouteComponentProps } from "react-router"

// internal
import './Dashboard.css';
import Profile from "./Profile";
import CreateEvent from "./CreateEvent/CreateEvent";
import EditEvent from "./EditEvent/EditEvent";
import Events from "./Events/Events";
import Settings from "./Settings/Settings";

const Dashboard: React.FC<RouteComponentProps> = ({ match }) => {

    {/*<TextToSpeechPlayer size={25} text="Fiesta en la casa de José. Descripción: Fiesta de cumpleaños de jose. Distancia: 1 metro. Tiempo de llegada: 1 minuto" lang="es-US" />*/}

    console.log(match.url);

    return (
    <IonPage>
        <IonRouterOutlet>
            <Route exact path={`${match.url}/events`} component={Events} />
            <Route exact path={`${match.url}/profile`} component={Profile} />
            <Route exact path={`${match.url}/events/create`} component={CreateEvent} />
            <Route exact path={`${match.url}/settings`} component={Settings} />
            <Route path={`${match.url}/events/:id/edit`} component={EditEvent} />
            <Route exact path={ match.url } >
                <Redirect to={`${match.url}/events`} />
            </Route>
        </IonRouterOutlet>
    </IonPage>
  );
};

export default Dashboard;
