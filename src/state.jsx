import React, {createContext,useReducer} from "react";

let AppContext = createContext({})


const initialState = 
{
     appName: "WhatsApp"
}

let reducer = (state, action) => {
    switch (action.type) {
        case "setAppName":
            {
                return{...state, appName: action.payload}
            }
            
            break;
    
        default:
            return state;
    }

}

function AppContextProvider(props){
    const appState = {
        ...initialState
    }
    let [state,dispatch] = useReducer(reducer, appState)
    let value = {state, dispatch}

    return(
        <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
    )
}

export {AppContext,AppContextProvider}