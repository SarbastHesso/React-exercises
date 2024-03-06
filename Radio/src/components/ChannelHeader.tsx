import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import { ChannelContext } from "../context/ChannelsContext";


const ChannelHeader = () => {

  const {channelId} = useParams();

  const {channels} = useContext(ChannelContext)

  const [channelName, setChannelName] = useState<string>('');
  const [channelType, setChannelType] = useState<string>('');

  useEffect(() => {
    if (channelId && channels){
      channels.map(channel => {
        if (channel.id.toString() === channelId){
          setChannelName(channel.name)
          setChannelType(channel.channeltype)
        }
      })
    }
  },  [channelId, channels])
  return (
    <>
      <header className="channel-header">
        <div className="channel-title">
          <h3>{channelName}-{channelType}</h3>
        </div>
        <nav className="channel-navbar">
          <Link to={`/channel/${channelId}/episodes`} className="channel-navlink">Sändningar</Link>
          <Link to={`/channel/${channelId}/programs`} className="channel-navlink">program</Link>
        </nav>
      </header>
    </>
  );
}

export default ChannelHeader