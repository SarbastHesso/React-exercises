import { Link } from "react-router-dom";
import { IChannel } from "../interfaces"

interface IChannelCardProps {
  channel: IChannel;
  playLiveAudio: (src: string) => void;
}

const ChannelCard = ({channel, playLiveAudio}: IChannelCardProps) => {

  return (
    <div className="card" id={channel.id.toString()}>
      <Link to={`/channel/${channel.id}`} className="card-header">
        <img src={channel.image} alt="" />
      </Link>
      <div className="card-body">
        <div className="title-favoeite-wrapper">
          <div className="title">
            <h4 className="name">
              {channel.name}-{channel.channeltype}
            </h4>
          </div>
          <span className="favorite-icon material-symbols-outlined">star</span>
        </div>
        <div className="description">
          <p>{channel.tagline}</p>
        </div>
      </div>
      <div
        className="card-footer"
        onClick={() => playLiveAudio(channel.liveaudio.url)}
      >
        <span className="material-symbols-outlined">play_arrow</span>
        <span>LIVE</span>
      </div>
    </div>
  );
}

export default ChannelCard