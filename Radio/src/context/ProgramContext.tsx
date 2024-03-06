import { ReactElement, createContext, useEffect, useState } from "react";
import { IProgram } from "../interfaces";

interface IProgramInfo {
  program: IProgram | null;
  saveProgramId: (id: string) => void;
}

interface IProgramInfoProps {
  children: ReactElement;
}

export const ProgramInfoContext = createContext({} as IProgramInfo);

export function PorgramInfoContextProvider({ children }: IProgramInfoProps) {
  const [program, setProgram] = useState<IProgram | null>(null);
  const [programId, setProgramId] = useState<string>("");
//   const [currentEpisodesPage, setCurrentEpisodesPage] = useState<number>(1);
//   const [totalEpisodesPages, setTotalEpisodesPages] = useState<number>(1);

  const saveProgramId = (id: string) => {
    setProgramId(id);
  };

//   const episodesPagination = (page: number) => {
//     setCurrentEpisodesPage(page);
//   };

  const fetchProgram = async ( programId: string) => {
    try {
      const response = await fetch(
        // `http://api.sr.se/api/v2/scheduledepisodes?channelid=${programId}&format=json&page=${pageNumber}`
        `http://api.sr.se/api/v2/programs/${programId}?format=json`
      );
      const data = await response.json();
      setProgram(data.program);
    //   setTotalEpisodesPages(data.pagination.totalpages);
    } catch (error) {
      console.error("Error fetching program", error);
    }
  };

  useEffect(() => {
    if (programId) {
      fetchProgram(programId);
    //   fetchProgram(currentEpisodesPage, channelId);
    }
  }, [programId]);
//   }, [currentEpisodesPage, channelId]);

  const values: IProgramInfo = {
    program,
    saveProgramId,
  };

  return (
    <ProgramInfoContext.Provider value={values}>
      {children}
    </ProgramInfoContext.Provider>
  );
}
