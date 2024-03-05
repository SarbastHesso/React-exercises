import {ReactElement, createContext, useEffect, useState} from 'react';
import { IChannel } from '../interfaces';

interface IChannelContext {
  channels: IChannel[];
  currentChannelPage: number;
  totalChannelsPages: number;
  channelsPagination: (page: number) => void;
}

interface IChannelContextProviderProps {
    children: ReactElement;
}

export const ChannelContext = createContext({} as IChannelContext);

export function ChannelContextProvider({children}: IChannelContextProviderProps){
    const [channels, setChannels] = useState<IChannel[]>([]);
    const [currentChannelPage, setCurrentChannelPage] = useState<number>(1);
    const [totalChannelsPages, setTotalChannelsPages] = useState<number>(1);

    const channelsPagination = (page: number) => {
      setCurrentChannelPage(page);
    };

    const fetchChannels = async (pageNumber: number) => {
      try {
        const response = await fetch(
          `http://api.sr.se/api/v2/channels?format=json&page=${pageNumber}`
        );
        const data = await response.json();
        setChannels(data.channels);
        setTotalChannelsPages(data.pagination.totalpages);
      } catch (error) {
        console.error("Error fetching channels", error);
      }
    };

    const values: IChannelContext = {
      channels,
      currentChannelPage,
      totalChannelsPages,
      channelsPagination,
    };

    useEffect(() => {
      fetchChannels(currentChannelPage);
    }, [currentChannelPage]);


    return <ChannelContext.Provider value={values}>{children}</ChannelContext.Provider>
}