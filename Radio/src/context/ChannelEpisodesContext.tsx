import {ReactElement, createContext, useEffect, useState} from 'react';
import { IEpisode } from '../interfaces';

interface IChannelEpisode {
  episodes: IEpisode[];
  episodesChannelId: (id: string) => void;
  currentEpisodesPage: number;
  totalEpisodesPages: number;
  episodesPagination: (page: number) => void;
}

interface IChannelEpisodeContextProviderProps {
    children: ReactElement;
}

export const ChannelEpisodeContext = createContext({} as IChannelEpisode);

export function ChannelEpisodeContextProvider ({children} : IChannelEpisodeContextProviderProps) {

    const [episodes, setEpisodes] = useState<IEpisode[]>([]);
    const [channelId, setChannelId] = useState<string>('');
    const [currentEpisodesPage, setCurrentEpisodesPage] = useState<number>(1);
    const [totalEpisodesPages, setTotalEpisodesPages] = useState<number>(1);

    const episodesChannelId = (id:string) => {
      setChannelId(id);
    };

    const episodesPagination = (page: number ) => {
      setCurrentEpisodesPage(page);
    };

    const fetchEpisodes = async (pageNumber: number , channelId: string) => {
      try {
        const response = await fetch(
          `http://api.sr.se/api/v2/scheduledepisodes?channelid=${channelId}&format=json&page=${pageNumber}`
        );
        const data = await response.json();
        setEpisodes(data.schedule);
        setTotalEpisodesPages(data.pagination.totalpages);
      } catch (error) {
        console.error("Error fetching episodes", error);
      }
    };

    useEffect(() => {
      if (channelId){
        fetchEpisodes(currentEpisodesPage, channelId);
      }
    }, [currentEpisodesPage, channelId]);

    const values: IChannelEpisode = {
      episodes,
      episodesChannelId,
      currentEpisodesPage,
      totalEpisodesPages,
      episodesPagination
    };

    return <ChannelEpisodeContext.Provider value={values}>{children}</ChannelEpisodeContext.Provider>
}