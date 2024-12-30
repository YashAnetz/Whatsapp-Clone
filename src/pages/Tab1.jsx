import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonList, IonAvatar, IonItem, IonLabel } from '@ionic/react';
import ChatItem from '../components/chatItem';
import '../App.css';
import { AppContext } from '../state';
import { useContext } from 'react';

const Tab1 = () => {
  
  const {state,dispatch} = useContext(AppContext)
  console.log(state);

  
  return (
    <IonPage>
      <IonContent className='chat-screen' fullscreen>
        <IonList>
          {state.user.contacts.map((contact) => <ChatItem contact ={contact} key={contact.user_id}></ChatItem>)}
        </IonList> 
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
