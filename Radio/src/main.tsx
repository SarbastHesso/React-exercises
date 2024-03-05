import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './scss/main.scss';
import { ChannelContextProvider } from './context/ChannelsContext.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChannelContextProvider>
       <App />
    </ChannelContextProvider>
  </React.StrictMode>,
)
