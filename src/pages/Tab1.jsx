import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import { AppContext } from '../state';
import { useContext } from 'react';

const Tab1 = () => {
  
  const {state,dispatch} = useContext(AppContext)
  console.log(state);

  
  return (
    <IonPage>
      <IonContent fullscreen>
        Tab1 
    
       
       
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
