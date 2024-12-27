import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx'
import {AppContextProvider} from "./state";

const container = document.getElementById('root');
const root = createRoot(container!);

const RootComponent = () => {
  return(
    <AppContextProvider>
      <App/>
    </AppContextProvider>
  )}

  root.render(
    <React.StrictMode>
      <RootComponent/>
    </React.StrictMode>
  );
  
