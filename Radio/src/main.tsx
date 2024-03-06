import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './scss/main.scss';
import { ChannelContextProvider } from './context/ChannelsContext.tsx';
import { ProgramContextProvider } from './context/ProgramsContext.tsx';
import { ChannelEpisodeContextProvider } from './context/ChannelEpisodesContext.tsx';
import { ChannelProgramContextProvider } from './context/ChannelProgramsContext.tsx';
import { PorgramInfoContextProvider } from './context/ProgramContext.tsx';


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ProgramContextProvider>
      <PorgramInfoContextProvider>
        <ChannelContextProvider>
          <ChannelProgramContextProvider>
            <ChannelEpisodeContextProvider>
              <App />
            </ChannelEpisodeContextProvider>
          </ChannelProgramContextProvider>
        </ChannelContextProvider>
      </PorgramInfoContextProvider>
    </ProgramContextProvider>
  </React.StrictMode>
);
