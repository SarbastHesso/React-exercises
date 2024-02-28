export interface ILiveaudio {
    id: number;
    statkey: string;
    url: string;
}

export interface IChannel {
    channeltype: string;
    color: string;
    id: number;
    image: string;
    imagetemplate: string;
    liveaudio: ILiveaudio;
    name: string;
    scheduleurl: string;
    siteurl: string;
    tagline: string;
    xmltvid: string;
}



