import { IonContent, IonHeader, IonInput, IonPage, IonTitle, IonToolbar ,IonItem, IonButton , IonLoading ,} from "@ionic/react";
import React ,{useContext,useState} from "react";
import "../App.css"
import db from "../Firestore";
import { AppContext } from "../state";

const Login =  () => {
    const {state,dispatch} = useContext(AppContext)
    const [passcode, setPasscode] = useState("")
    const[showLoading,setShowLoading] = useState(false)
    const login = async () => {
        setShowLoading(true)
        let user;
        const fetchUser = await db.collection("users").where("passcode","==",passcode).get()
        fetchUser.forEach((doc)=> {
            user = doc.data()
            user.id = doc.id;
            console.log(user)
        })

    }
    return(
        <IonPage>
            <IonHeader>
                <IonToolbar className="login-bar"><IonTitle>Two-step verification</IonTitle></IonToolbar>
                
            </IonHeader>
            <IonContent>
                <div className="passcode-text">Enter a 4 digit passcode , which you'll be asked for when you register your phone number with whatsapp</div>
                <div className="passcode-input-section">
                    <IonItem className="passcode-input">
                    <IonInput value = {passcode} onIonChange={(e)=> 
                        setPasscode(e.detail.value)
                    }   > </IonInput>
                    </IonItem>
                    </div>
                    <IonButton className="login-button" onClick={login} disabled={!passcode}>Login</IonButton>
                    <IonLoading isOpen={showLoading} onDidDismiss={()=>setShowLoading(false)}  message="Loading..."  spinner="circles" />
                    </IonContent>
        </IonPage>
    )
}

export default Login;
