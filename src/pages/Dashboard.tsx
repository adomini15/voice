// external
import {
    IonFooter, IonIcon, IonLabel,
    IonPage, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs,
} from '@ionic/react';
import {Redirect, Route} from "react-router-dom";
import { RouteComponentProps } from "react-router"
// icons
import { personCircleOutline as profile, settingsOutline as settings, calendarOutline as events } from "ionicons/icons"

// internal
import './Dashboard.css';
import Profile from "./Profile";
import CreateEvent from "./CreateEvent/CreateEvent";
import EditEvent from "./EditEvent/EditEvent";
import Events from "./Events/Events";
import Settings from "./Settings/Settings";

const Dashboard: React.FC<RouteComponentProps> = ({ match }) => {

    return (
    <IonTabs>

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

            <IonTabBar slot="bottom" >
                <IonTabButton tab="profile" href={`${match.url}/profile`}>
                    <IonIcon icon={profile} />
                    <IonLabel>Profile</IonLabel>
                </IonTabButton>

                <IonTabButton tab="events" href={`${match.url}/events`}>
                    <IonIcon icon={events} />
                    <IonLabel>Events</IonLabel>
                </IonTabButton>

                <IonTabButton tab="settings" href={`${match.url}/settings`}>
                    <IonIcon icon={settings} />
                    <IonLabel>Settings</IonLabel>
                </IonTabButton>
            </IonTabBar>

    </IonTabs>
  );
};

export default Dashboard;
