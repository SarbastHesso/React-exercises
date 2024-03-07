import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom';
import RootLayout from './components/RootLayout';
import Home from './views/Home';
import ChannelsList from './views/ChannelsList';
import ProgramsList from './views/ProgramsList';
import ChannelLayout from './components/ChannelLayout';
import ChannelScheduledEpisodes from './views/ChannelScheduledEpisodes';
import ChannelPrograms from './views/ChannelPrograms';
import ProgramLayout from './components/ProgramLayout';
import ProgramInfo from './views/ProgramInfo';
import ProgramBroadcasts from './views/ProgramBroadcasts';
import ProgramPod from './views/ProgramPod';


function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="channels" element={<ChannelsList />} />
        <Route path="channel/:channelId" element={<ChannelLayout />}>
          <Route index element={<ChannelScheduledEpisodes />} />
          <Route path="episodes" element={<ChannelScheduledEpisodes />} />
          <Route path="programs" element={<ChannelPrograms />} />
        </Route>
        <Route path="programs" element={<ProgramsList />} />
        <Route path="program/:programId" element={<ProgramLayout />}>
          <Route index element={<ProgramInfo />} />
          <Route path="info" element={<ProgramInfo />} />
          <Route path="broadcasts" element={<ProgramBroadcasts />} />
          <Route path="podfiles" element={<ProgramPod />} />
        </Route>
      </Route>
    )
  );

  return (
    <RouterProvider router={router}>

    </RouterProvider>
  )
}

export default App



