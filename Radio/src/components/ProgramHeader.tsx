import { Link, useParams } from "react-router-dom";

const ProgramHeader = () => {

    const { programId } = useParams();

    // const { channels } = useContext(ChannelContext);

    // const [channelName, setChannelName] = useState<string>("");
    // const [channelType, setChannelType] = useState<string>("");

    // useEffect(() => {
    //   if (channelId && channels) {
    //     channels.map((channel) => {
    //       if (channel.id.toString() === channelId) {
    //         setChannelName(channel.name);
    //         setChannelType(channel.channeltype);
    //       }
    //     });
    //   }
    // }, [channelId, channels]);

  return (
    <>
      <header className="subroute-header">
        {/* <div className="subroute-title">
          <h3>
            {channelName}-{channelType}
          </h3>
        </div> */}
        <nav className="subroute-navbar">
          <Link to={`/program/${programId}/info`} className="subroute-navlink">
            Program
          </Link>
          <Link
            to={`/program/${programId}/episodes`}
            className="subroute-navlink"
          >
            Sändningar
          </Link>
        </nav>
      </header>
    </>
  );
}

export default ProgramHeader