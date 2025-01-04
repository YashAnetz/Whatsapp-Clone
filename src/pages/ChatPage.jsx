import React, { useContext, useState, useRef} from "react";
import {
  IonAvatar,
  IonButton,
  IonCol,
  IonContent,
  IonFooter,
  IonGrid,
  IonHeader,
  IonIcon,
  IonInput,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
  useIonViewWillEnter,
  useIonViewWillLeave,
} from "@ionic/react";
import { AppContext } from "../state";
import { sendSharp, happyOutline, linkOutline } from "ionicons/icons";
import db from "../Firestore";
import Utility from "../utility";
import { collection, addDoc , query, where, orderBy, limit, onSnapshot } from "firebase/firestore";
import ChatMessage from "../components/ChatMessage"
import "../App.css"

const ChatPage = () => {
  const { state, dispatch } = useContext(AppContext);
  const [message, setMessage] = useState("");
  const [chatMessages,setChatMessages] = useState([])
  let messageSubscription = useRef(null);
  let messages = []

  

  useIonViewWillLeave( () => {
    dispatch({
      type: "setNoTabs",
      payload: false,
    });
  });

  useIonViewWillEnter(() => {
    const channel1 = `${state.user.user_id},${state.chattingWith.user_id}`;
    const channel2 = `${state.chattingWith.user_id},${state.user.user_id}`;
    
    console.log("Channel1:", channel1);
    console.log("Channel2:", channel2);
  
    // Clear messages state on re-enter
    setChatMessages([]);
  
    const messagesQuery = query(
        collection(db, "messages"),
        where("body.channel", "in", [channel1, channel2]),
        orderBy("body.time"),
        limit(100)
      );
  
    messageSubscription.current = onSnapshot(messagesQuery, (querySnapshot) => {
      console.log("Number of documents fetched:", querySnapshot.size); // Debug
      const fetchedMessages = [];
      querySnapshot.forEach((doc) => {
        console.log("Document Data:", doc.data()); // Debug
        const messageData = doc.data();
        if (messageData.body) {
          fetchedMessages.push(messageData.body);
        }
      });
  
      console.log("Fetched Messages Array:", fetchedMessages); // Debug
      setChatMessages(fetchedMessages);
    });
  });

  
  const sendMessage = async () => {
    if (!message || message.trim() === "") {
      console.error("Cannot send an empty message.");
      return;
    }

    let messageBody = {
      message_id: Utility.genRandom(),
      sent_by: state.user.user_id,
      channel: `${state.user.user_id},${state.chattingWith.user_id}`,
      type: "text",
      message: message.trim(),
      file_url: null,
      time: +Date.now(),
    };

    try {
      const send_response = await addDoc(collection(db, "messages"), {
        body: messageBody,
        timestamp: new Date(),
      });
      console.log("Message sent with ID:", send_response.id);
      setMessage(""); // Clear the input after sending the message
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className="menu-bar">
          <IonAvatar slot="start" style={{ width: "40px", height: "40px", marginLeft: "10px" }}>
            <img src={state.chattingWith.avatar} alt="Avatar"></img>
          </IonAvatar>
          <IonTitle>{state.chattingWith.name}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="chat-page-content">
  {chatMessages.length > 0 ? (
    chatMessages.map((chat) => (
      <ChatMessage key={chat.message_id} chat={chat}>
        
      </ChatMessage>
    ))
  ) : (
    <p>No messages yet</p>
  )}
</IonContent>      <IonFooter>
        <IonToolbar>
          <IonGrid>
            <IonRow>
              <IonCol>
                <IonGrid>
                  <IonRow>
                    <IonCol size="2">
                      <IonIcon size="large" icon={happyOutline}></IonIcon>
                    </IonCol>
                    <IonCol>
                      <IonInput
                        value={message}
                        onIonChange={(e) => setMessage(e.detail.value)}
                        placeholder="Type a message"
                      ></IonInput>
                    </IonCol>
                    <IonCol size="2">
                      <IonIcon className="media-icon" size="large" icon={linkOutline}></IonIcon>
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </IonCol>
              <IonCol size="2">
                <IonButton onClick={sendMessage} className="chat-send-button">
                  <IonIcon icon={sendSharp}></IonIcon>
                </IonButton>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
};

export default ChatPage;
