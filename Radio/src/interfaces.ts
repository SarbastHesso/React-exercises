

interface ILiveaudio {
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

interface IEpisodeProgram {
  id: number;
  name: string;
}

interface IEpisodeChannel {
  id: number;
  name: string;
}

export interface IEpisode {
  episodeid: number;
  title: string;
  description: string;
  starttimeutc: string;
  endtimeutc: string;
  program: IEpisodeProgram;
  channel: IEpisodeChannel;
  imageurl: string;
  imageurltemplate: string;
  photographer: string | null;
}

interface IProgramCategory {
  id: number;
  name: string;
}


interface ISocialmediaplatform {
  platform: string;
  platformurl: string;
}

interface IProgramschannel {
    id: number;
    name: string;
}

export interface IProgram {
  id: number;
  name: string;
  description: string;
  programcategory?: IProgramCategory;
  broadcastinfo: string;
  payoff?: string;
  email: string;
  phone?: number;
  programurl: string;
  programslug: string;
  programimage: string;
  programimagetemplate: string;
  programimagewide: string;
  programimagetemplatewide: string;
  socialimage: string;
  socialimagetemplate: string;
  socialmediaplatforms: ISocialmediaplatform[];
  channel: IProgramschannel;
  archived: boolean;
  hasondemand: boolean;
  haspod: boolean;
  responsibleeditor: string;
} 


interface IPlaylist {
  id: string;
  url: string;
  statkey: string;
  duration: number;
  publishdateutc?: string;
}

interface IBroadcastfile {
  id: string;
  url: string;
  statkey: string;
  duration: number;
  publishdateutc?: string;
}

export interface IBroadcast {
  id: string;
  availablestoputc: string;
  playlist: IPlaylist;
  broadcastfiles: IBroadcastfile[];
  title: string;
  description: string;
  broadcastdateutc: string;
  totalduration: number;
  image: string;
}

interface IPodProgram {
  id: string;
  name: string;
}
export interface IPodfile {
  id: string;
  url: string;
  statkey: string;
  duration: number;
  publishdateutc: string;
  title: string;
  description: string;
  filesizeinbytes: number;
  program: IPodProgram;
  availablefromutc: string;
}