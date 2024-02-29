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


export interface ISocialmediaplatform {
  platform: string;
  platformurl: string;
}

export interface IProgramschannel {
    id: number;
    name: string;
}

export interface IProgram {
  id: number;
  name: string;
  description: string;
  broadcastinfo: string;
  email: string;
  phone: number | string | null;
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
