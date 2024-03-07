import { ReactElement, createContext, useEffect, useState } from "react";
import { IProgram } from "../interfaces";

interface IChannelEpisode {
  programs: IProgram[];
  programChannelId: (id: string) => void;
  currentProgramsPage: number;
  totalProgramsPages: number;
  programsPagination: (page: number) => void;
}

interface IChannelProgramContextProviderProps {
  children: ReactElement;
}

export const ChannelProgramContext = createContext({} as IChannelEpisode);

export function ChannelProgramContextProvider({
  children,
}: IChannelProgramContextProviderProps) {
  const [programs, setPrograms] = useState<IProgram[]>([]);
  const [channelId, setChannelId] = useState<string>("");
  const [currentProgramsPage, setCurrentProgramsPage] = useState<number>(1);
  const [totalProgramsPages, setTotalProgramsPages] = useState<number>(1);

  const programChannelId = (id: string) => {
    setChannelId(id);
  };

  const programsPagination = (page: number) => {
    setCurrentProgramsPage(page);
  };

  const fetchPrograms = async (pageNumber: number, channelId: string) => {
    try {
      const response = await fetch(
        `http://api.sr.se/api/v2/programs/index?channelid=${channelId}&format=json&page=${pageNumber}`
      );
      const data = await response.json();
      setPrograms(data.programs);
      setTotalProgramsPages(data.pagination.totalpages);
    } catch (error) {
      console.error("Error fetching programs", error);
    }
  };

  useEffect(() => {
    if (channelId) {
      fetchPrograms(currentProgramsPage, channelId);
    }
  }, [currentProgramsPage, channelId]);

  const values: IChannelEpisode = {
    programs,
    programChannelId,
    currentProgramsPage,
    totalProgramsPages,
    programsPagination,
  };

  return (
    <ChannelProgramContext.Provider value={values}>
      {children}
    </ChannelProgramContext.Provider>
  );
}
