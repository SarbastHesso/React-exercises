import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom';
import { useEffect, useState } from "react";
import RootLayout from './components/RootLayout';
import Home from './views/Home';
import ChannelsList from './views/ChannelsList';
import { IChannel } from "./interfaces";
import ProgramsList from './views/ProgramsList';


function App() {

  const [channels, setChannels] = useState<IChannel[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalChannelsPages, setTotalChannelPages] = useState<number>(1)

  const fetchChannels = async () => {
    try {
      const response = await fetch(
        `http://api.sr.se/api/v2/channels?format=json&page=${currentPage}`
      );
      const data = await response.json();
      setChannels(data.channels);
      setTotalChannelPages(data.pagination.totalpages)
    } catch (error) {
      console.error("Error fetching channels", error);
    }
  };

  const channelsPagination = (page: number) => {
    setCurrentPage(page);
  }


  useEffect(() => {
    fetchChannels();
  },[currentPage]);

  useEffect(() => {
    console.log(channels);
  }, [channels]);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route
          path="/channels"
          element={
            <ChannelsList
              channels={channels}
              currentPage={currentPage}
              totalChannelsPages={totalChannelsPages}
              channelsPagination={channelsPagination}
            />
          }
        />
        <Route path="/programs" element={<ProgramsList />} />
      </Route>
    )
  );

  return (
    <RouterProvider router={router}>

    </RouterProvider>
  )
}

export default App
