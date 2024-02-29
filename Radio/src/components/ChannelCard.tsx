import { IChannel } from "../interfaces"

interface IChannelCardProps {
  channel: IChannel;
}

const ChannelCard = (props: IChannelCardProps) => {

  return (
    <div className="card" id={props.channel.id.toString()}>
      <div className="image-container">
        <img src={props.channel.image} alt="" />
      </div>
      <div className="card-body">
        <div className="title-favoeite-wrapper">
          <div className="title">
            <h4 className="name">{props.channel.name}</h4> -{" "}
            <h4 className="type">{props.channel.channeltype}</h4>
          </div>
          <span className="favorite-icon material-symbols-outlined">star</span>
        </div>
        <div className="description">
          <p>{props.channel.tagline}</p>
        </div>
        <audio className="audio-controls" controls>
          <source src={props.channel.liveaudio.url} type="audio/mpeg" />
        </audio>
      </div>
    </div>
  );
}

export default ChannelCard