import { IEpisode } from "../interfaces"

interface IEpisodeCardProps {
    episode: IEpisode
}

const EpisodeCard = ({episode}: IEpisodeCardProps) => {

  function formatDateFromApi(dateString: string | null): string {
    if (dateString === null) {
      return "";
    }
    const match = dateString.match(/\d+/);
    if (!match) {
      return ""; 
    }
    const timestamp = parseInt(match[0]);
    const date = new Date(timestamp);
    const timeFormat = date.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });

    return timeFormat;
  }

  const startTime = formatDateFromApi(episode.starttimeutc)
  const endTime = formatDateFromApi(episode.endtimeutc)


  return (
    <div className="card">
      <div className="card-header" style={{cursor: 'default'}}>
        <img src={episode.imageurl} alt="" />
      </div>
      <div className="card-body">
        <div className="title-favoeite-wrapper">
          <div className="title">
            <h4 className="name">{episode.title}-{episode.program.name}</h4>
            <span>{startTime} - {endTime}</span>
          </div>
          <span className="favorite-icon material-symbols-outlined">star</span>
        </div>
        <div className="description">
          <p>{episode.description}</p>
        </div>
      </div>
    </div>
  );
}

export default EpisodeCard