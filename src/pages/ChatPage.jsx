import React , {useContext,useState} from "react";

import { IonAvatar, IonButton, IonCol, IonContent, IonFooter, IonGrid, IonHeader, IonIcon, IonInput, IonPage, IonRow, IonTitle, IonToolbar, useIonViewWillLeave } from "@ionic/react"
import { AppContext } from "../state";
import {sendSharp,happyOutline,linkOutline} from "ionicons/icons"
import db from "../Firestore"
import Utility from "../utility";

const chatPage = () =>{

    const {state , dispatch} = useContext(AppContext)
    const [message,setMessage] = useState()
    useIonViewWillLeave(()=>{
        dispatch({
            type:"setNoTabs",
            payload: false
        })
    })

    const sendMessage = async () => {
          let messageBody = {
            message_id : Utility.getRandom(),
            sent_by : state.user.user_id,
            channel: `${state.user.userid},${state.chattingWith.user_id}`,
            type:"text",
            message:message,
            file_url:null,
            time:+Date.nowx
          }
    }


    return(
        <IonPage>
            <IonHeader>
                <IonToolbar className="menu-bar">
                    <IonAvatar slot="start" style={{width:"40px", height:"40px",marginLeft:"10px"}}>
                        <img src={state.chattingWith.avatar}></img>
                        
                    </IonAvatar>
                    <IonTitle>{state.chattingWith.name}</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                Chat chat page
            </IonContent>
            <IonFooter>
                <IonToolbar>
                    <IonGrid>
                        <IonRow>
                            <IonCol>
                                <IonGrid>
                                    <IonRow>
                                        <IonCol  size="2">
                                            <IonIcon size="large" icon={happyOutline}>

                                            </IonIcon>
                                        </IonCol>
                                        <IonCol>
                                            <IonInput value={message} onIonChange={(e)=>setMessage(e.detail.value)} placeholder="Type a message">

                                            </IonInput>
                                        </IonCol>
                                        <IonCol  size="2">
                                            <IonIcon className="media-icon" size="large" icon={linkOutline}>

                                            </IonIcon>
                                        </IonCol>
                                    </IonRow>
                                </IonGrid>
                            </IonCol>
                            <IonCol size="2">
                                <IonButton className="chat-send-button">
                                    <IonIcon icon ={sendSharp}></IonIcon>
                                </IonButton>
                            </IonCol>
                        </IonRow>
                    </IonGrid>
                </IonToolbar>
            </IonFooter>
        </IonPage>
    )
}

export default chatPage