import {ReactElement, createContext, useEffect, useState} from 'react';
import { IProgram } from '../interfaces';

interface IProgramContext {
  programs: IProgram[];
  currentProgramPage: number;
  totalProgramsPages: number;
  programsPagination: (page: number) => void;
}

interface IProgramContextProviderProps {
    children: ReactElement;
}

export const ProgramContext = createContext({} as IProgramContext);

export function ProgramContextProvider ({children}: IProgramContextProviderProps){

    const [programs, setPrograms] = useState<IProgram[]>([]);
    const [currentProgramPage, setCurrentProgramPage] = useState<number>(1);
    const [totalProgramsPages, setTotalProgramsPages] = useState<number>(1);

    const programsPagination = (page: number) => {
        setCurrentProgramPage(page);
    };

    const fetchPrograms = async (pageNumber: number) => {
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

    const values: IProgramContext = {
      programs,
      currentProgramPage,
      totalProgramsPages,
      programsPagination,
    };

    useEffect(() => {
    fetchPrograms(currentProgramPage);
    }, [currentProgramPage]);


    return <ProgramContext.Provider value={values}>{children}</ProgramContext.Provider>
} 