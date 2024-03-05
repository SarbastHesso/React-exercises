import { useParams } from "react-router-dom";

const ChannelScheduledEpisodes = () => {
  const {channelId} = useParams();
  return (
      <div>
        ChannelScheduledEpisodes
        {channelId}
      </div>
  )
};

export default ChannelScheduledEpisodes;