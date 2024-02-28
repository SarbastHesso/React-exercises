import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom';
import { useEffect, useState } from "react";
import RootLayout from './components/RootLayout';
import Home from './views/Home';
import ChannelsList from './views/ChannelsList';
import { IChannel } from "./interfaces";
import Program from './views/Program';


function App() {

  const [channels, setChannels] = useState<IChannel[]>([]);

  const fetchChannels = async () => {
    try {
      const response = await fetch(
        "http://api.sr.se/api/v2/channels?format=json"
      );
      const data = await response.json();
      setChannels(data.channels);
    } catch (error) {
      console.error("Error fetching channels", error);
    }
  };

  useEffect(() => {
    fetchChannels();
  }, []);

  useEffect(() => {
    console.log(channels);
  }, [channels]);

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<RootLayout/>}>
      <Route index element={<Home/>}/>
      <Route path='/channels' element={<ChannelsList channels={channels}/>}/>
      <Route path='/programs' element={<Program />}/>
    </Route>
  ))

  return (
    <RouterProvider router={router}>

    </RouterProvider>
  )
}

export default App
