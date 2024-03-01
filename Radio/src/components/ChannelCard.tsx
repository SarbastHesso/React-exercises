import { IChannel } from "../interfaces"

interface IChannelCardProps {
  channel: IChannel;
  playLiveAudio: (src: string) => void;
}

const ChannelCard = (props: IChannelCardProps) => {

  return (
    <div className="card" id={props.channel.id.toString()}>
      <div className="card-header">
        <img src={props.channel.image} alt="" />
      </div>
      <div className="card-body">
        <div className="title-favoeite-wrapper">
          <div className="title">
            <h4 className="name">
              {props.channel.name}-{props.channel.channeltype}
            </h4>
          </div>
          <span className="favorite-icon material-symbols-outlined">star</span>
        </div>
        <div className="description">
          <p>{props.channel.tagline}</p>
        </div>
      </div>
      <div
        className="card-footer"
        onClick={() => props.playLiveAudio(props.channel.liveaudio.url)}
      >
        <span className="material-symbols-outlined">play_arrow</span>
        <span>LIVE</span>
      </div>
    </div>
  );
}

export default ChannelCard