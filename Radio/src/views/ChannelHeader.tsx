import { Link, useParams } from "react-router-dom"


const ChannelHeader = () => {
  const {channelId} = useParams();
  return (
    <>
      <header className="channel-header">
        <nav className="channel-navbar">
          <Link to={`/channel/${channelId}/episodes`} className="channel-navlink">Sändningar</Link>
          <Link to={`/channel/${channelId}/programs`} className="channel-navlink">program</Link>
        </nav>
        <div className="channel-title">
          <h3>Channel name {channelId}</h3>
        </div>
      </header>
    </>
  );
}

export default ChannelHeader