import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom';
import { useEffect, useState } from "react";
import RootLayout from './components/RootLayout';
import Home from './views/Home';
import ChannelsList from './views/ChannelsList';
import { IChannel, IProgram } from "./interfaces";
import ProgramsList from './views/ProgramsList';


function App() {

  const [channels, setChannels] = useState<IChannel[]>([]);
  const [currentChannelPage, setCurrentChannelPage] = useState<number>(1);
  const [totalChannelsPages, setTotalChannelsPages] = useState<number>(1)

  const [programs, setPrograms] = useState<IProgram[]>([]);
  const [currentProgramPage, setCurrentProgramPage] = useState<number>(1);
  const [totalProgramsPages, setTotalProgramsPages] = useState<number>(1);


  const channelsPagination = (page: number) => {
    setCurrentChannelPage(page);
  }

  const programsPagination = (page: number) => {
    setCurrentProgramPage(page);
  }


  useEffect(() => {
    if (currentChannelPage) {
      const fetchChannels = async () => {
        try {
          const response = await fetch(
            `http://api.sr.se/api/v2/channels?format=json&page=${currentChannelPage}`
          );
          const data = await response.json();
          setChannels(data.channels);
          setTotalChannelsPages(data.pagination.totalpages);
        } catch (error) {
          console.error("Error fetching channels", error);
        }
      };
      fetchChannels();
    }
    if (currentProgramPage) {
      const fetchPrograms = async () => {
        try {
          const response = await fetch(
            `https://api.sr.se/api/v2/programs?format=json&page=${currentProgramPage}`
          );
          const data = await response.json();
          setPrograms(data.programs);
          setTotalProgramsPages(data.pagination.totalpages);
        } catch (error) {
          console.error("Error fetching programs", error);
        }
      };
      fetchPrograms();
    }
  }, [currentChannelPage, currentProgramPage]);

  useEffect(() => {
    console.log(channels);
    console.log(programs);
  }, [channels, programs]);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route
          path="/channels"
          element={
            <ChannelsList
              channels={channels}
              currentChannelPage={currentChannelPage}
              totalChannelsPages={totalChannelsPages}
              channelsPagination={channelsPagination}
            />
          }
        />
        <Route
          path="/programs"
          element={
            <ProgramsList
              programs={programs}
              currentProgramPage={currentProgramPage}
              totalProgramsPages={totalProgramsPages}
              programsPagination={programsPagination}
            />
          }
        />
      </Route>
    )
  );

  return (
    <RouterProvider router={router}>

    </RouterProvider>
  )
}

export default App



