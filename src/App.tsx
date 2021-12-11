import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
// Global store provider
import StoreProvider from "./providers/storeProvider";
import {store} from "./context/redux/store";
import { onAuthStateChanged } from 'firebase/auth';

import SignIn from "./pages/SignIn";
import Signup from "./pages/Signup";
import {authLogoutSuccess, authUser} from "./actions/authActions";
import {firebaseConfig} from "./.firebaseConfig";
import Dashboard from "./pages/Dashboard";
import PrivateRoute from "./components/diverse/PrivateRoute";
import {eventAllRequest} from "./actions/eventActions";

// when app init
onAuthStateChanged( getAuth(initializeApp(firebaseConfig)) , (user) => {

  if (user) {
    store.dispatch(authUser(user))
    store.dispatch(eventAllRequest());
  } else {
    store.dispatch(authLogoutSuccess(null))
  }
})

const App: React.FC = () => (

  <IonApp>
    <StoreProvider>
      <IonReactRouter>
        <IonRouterOutlet>
          {/* public */}
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/signup" component={Signup} />

          {/* private */}
          <PrivateRoute path="/dashboard" component={Dashboard}  />
          <Route exact path="/">
            <Redirect to="/dashboard" />
          </Route>
        </IonRouterOutlet>
      </IonReactRouter>
    </StoreProvider>
  </IonApp>
);

export default App;
