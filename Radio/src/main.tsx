import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './scss/main.scss';
import { ChannelContextProvider } from './context/ChannelsContext.tsx';
import { ProgramContextProvider } from './context/ProgramsContext.tsx';
import { ChannelEpisodeContextProvider } from './context/ChannelEpisodesContext.tsx';

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ProgramContextProvider>
      <ChannelContextProvider>
        <ChannelEpisodeContextProvider>
          <App />
        </ChannelEpisodeContextProvider>
      </ChannelContextProvider>
    </ProgramContextProvider>
  </React.StrictMode>
);
