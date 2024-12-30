import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { ellipse, square, triangle } from 'ionicons/icons';
import Tab1 from './pages/Tab1';
import Tab2 from './pages/Tab2';
import Tab3 from './pages/Tab3';
import ChatPage from './pages/ChatPage';
import './App.css'
import {AppContext} from './state';

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

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* import '@ionic/react/css/palettes/dark.always.css'; */
/* import '@ionic/react/css/palettes/dark.class.css'; */
import '@ionic/react/css/palettes/dark.system.css';

/* Theme variables */
import './theme/variables.css';
import { useContext } from 'react';
import Login from './pages/Login';

setupIonicReact();

const App = () =>{  

  const{state,dispatch} = useContext(AppContext)
  
  return (
  <IonApp>{
    state.user ? 
    (<IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/tab1">
            <Tab1 />
          </Route>
          <Route exact path="/tab2">
            <Tab2 />
          </Route>
          <Route path="/tab3">
            <Tab3 />
          </Route>
          <Route path="/chatPage">
            <ChatPage />
          </Route>
          <Route exact path="/">
            <Redirect to="/tab1" />
          </Route>
        </IonRouterOutlet>
        {state.noTabs? (<IonTabBar slot="hidden"></IonTabBar>) : 

        (<IonTabBar className='menu-bar' slot="bottom">
          <IonTabButton tab="tab1" href="/tab1" className='tabButton'>
            {/* <IonIcon aria-hidden="true" icon={triangle} /> */}
            <IonLabel>Chats</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab2" href="/tab2" className='tabButton'>
            {/* <IonIcon aria-hidden="true" icon={ellipse} /> */}
            <IonLabel>Updates</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab3" href="/tab3" className='tabButton'>
            {/* <IonIcon aria-hidden="true" icon={square} /> */}
            <IonLabel>Calls</IonLabel>
          </IonTabButton>
        </IonTabBar>)}

        
      </IonTabs>
    </IonReactRouter>):<Login></Login>}
  </IonApp>)}


export default App;
