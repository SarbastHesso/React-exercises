import ChannelCard from "../components/ChannelCard";
import { IChannel } from "../interfaces"

interface IChannelListProps {
    channels: IChannel[];
}

const ChannelsList = (props: IChannelListProps) => {
  return (
    <div className="channels-list">
        {
            props.channels.map((channel) => {
                return <ChannelCard channel={channel} key={channel.id}/>
            })
        }
    </div>
  )
}

export default ChannelsList