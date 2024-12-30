import React, {useContext} from "react";
import {IonItem, IonAvatar , IonLabel} from "@ionic/react"
import { useHistory } from "react-router";
import { AppContext } from "../state";


const ChatItem = ({contact}) => {
    const {state,dispatch} = useContext(AppContext)

    let history = useHistory()
    const goToChat = () =>{
        dispatch({
            type: "setNoTabs",
            payload : true
        })
        dispatch({
            type:"setChattingWith",
            payload: contact
        })

        history.push("/chatPage")
    }

    let profile_photo = contact.avatar || "https://villagesonmacarthur.com/wp-content/uploads/2020/12/Blank-Avatar.png";
    return (
         <IonItem onClick={() => goToChat()}>
                  <IonAvatar slot="start">
                    <img src={profile_photo} alt="icon"></img>
                  </IonAvatar>
                  <IonLabel>
                    <h2>{contact.name}</h2>
                    <p>
                      Hey Hi how are you?
                    </p>
                  </IonLabel>
                  </IonItem>
    )
}

export default ChatItem