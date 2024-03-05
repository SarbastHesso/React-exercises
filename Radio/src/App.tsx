import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom';
import { useEffect, useState } from "react";
import RootLayout from './components/RootLayout';
import Home from './views/Home';
import ChannelsList from './views/ChannelsList';
import { IProgram } from "./interfaces";
import ProgramsList from './views/ProgramsList';
import ChannelLayout from './components/ChannelLayout';
import ChannelScheduledEpisodes from './views/ChannelScheduledEpisodes';
import ChannelPrograms from './views/ChannelPrograms';


function App() {

  const [programs, setPrograms] = useState<IProgram[]>([]);
  const [currentProgramPage, setCurrentProgramPage] = useState<number>(1);
  const [totalProgramsPages, setTotalProgramsPages] = useState<number>(1);


  const programsPagination = (page: number) => {
    setCurrentProgramPage(page);
  }

  const fetchPrograms = async (pageNumber:number) => {
    try {
      const response = await fetch(
        `https://api.sr.se/api/v2/programs?format=json&page=${pageNumber}`
      );
      const data = await response.json();
      setPrograms(data.programs);
      setTotalProgramsPages(data.pagination.totalpages);
    } catch (error) {
      console.error("Error fetching programs", error);
    }
  };

  useEffect(() => {
    fetchPrograms(currentProgramPage);
  }, [currentProgramPage]);

  useEffect(() => {
    console.log(programs);
  }, [ programs]);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="channels" element={<ChannelsList/>} />
        <Route path="channel/:channelId" element={<ChannelLayout />}>
          <Route index element={<ChannelScheduledEpisodes />} />
          <Route path="episodes" element={<ChannelScheduledEpisodes />} />
          <Route path="programs" element={<ChannelPrograms />} />
        </Route>
        <Route
          path="programs"
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



