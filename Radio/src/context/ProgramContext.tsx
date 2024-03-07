import { ReactElement, createContext, useEffect, useState } from "react";
import { IBroadcast, IPodfile, IProgram } from "../interfaces";

interface IProgramInfo {
  program: IProgram | null;
  saveProgramId: (id: string) => void;
  broadcasts: IBroadcast[];
  currentBoardcastsPage: number;
  totalBoardcastsPages: number;
  boardcastsPagination: (page: number) => void;
  podfiles: IPodfile[];
  currentPodfilesPage: number;
  totalPodfilesPages: number;
  PodfilesPagination: (page: number) => void;
}

interface IProgramInfoProps {
  children: ReactElement;
}

export const ProgramInfoContext = createContext({} as IProgramInfo);

export function PorgramInfoContextProvider({ children }: IProgramInfoProps) {

  const [program, setProgram] = useState<IProgram | null>(null);
  const [programId, setProgramId] = useState<string>("");

  const [broadcasts, setBroadcasts] = useState<IBroadcast[]>([]);
  const [currentBoardcastsPage, setCurrentBoardcastsPage] = useState<number>(1);
  const [totalBoardcastsPages, setTotalBoardcastsPages] = useState<number>(1);

  const [podfiles, setPodfiles] = useState<IPodfile[]>([]);
  const [currentPodfilesPage, setCurrentPodfilesPage] = useState<number>(1);
  const [totalPodfilesPages, setTotalPodfilesPages] = useState<number>(1);

  const saveProgramId = (id: string) => {
    setProgramId(id);
  };

  const boardcastsPagination = (page: number) => {
    setCurrentBoardcastsPage(page);
  };
  
  const PodfilesPagination = (page: number) => {
    setCurrentPodfilesPage(page);
  };

  const fetchProgram = async ( programId: string) => {
    try {
      const response = await fetch(
        `http://api.sr.se/api/v2/programs/${programId}?format=json`
      );
      const data = await response.json();
      setProgram(data.program);
    } catch (error) {
      console.error("Error fetching program", error);
    }
  };

  const fetchBoarcasts = async ( programId: string, pageNumber: number) => {
    try {
      const response = await fetch(
        `http://api.sr.se/api/v2/broadcasts?programid=${programId}&format=json&page=${pageNumber}`
      );
      const data = await response.json();
      setBroadcasts(data.broadcasts);
      setTotalBoardcastsPages(data.pagination.totalpages);
    } catch (error) {
      console.error("Error fetching broadcasts", error);
    }
  };

  const fetchPodfiles = async ( programId: string, pageNumber: number) => {
    try {
      const response = await fetch(
        `http://api.sr.se/api/v2/podfiles?programid=${programId}&format=json&page=${pageNumber}`
      );
      const data = await response.json();
      setPodfiles(data.podfiles);
      setTotalPodfilesPages(data.pagination.totalpages);
    } catch (error) {
      console.error("Error fetching podfiles", error);
    }
  };

  useEffect(() => {
    if (programId) {
      fetchProgram(programId);
      fetchBoarcasts(programId, currentBoardcastsPage);
      fetchPodfiles(programId, currentBoardcastsPage);
    }
  }, [programId, currentBoardcastsPage]);

  const values: IProgramInfo = {
    program,
    saveProgramId,
    broadcasts,
    currentBoardcastsPage,
    totalBoardcastsPages,
    boardcastsPagination,
    podfiles,
    currentPodfilesPage,
    totalPodfilesPages,
    PodfilesPagination,
  };

  return (
    <ProgramInfoContext.Provider value={values}>
      {children}
    </ProgramInfoContext.Provider>
  );
}
