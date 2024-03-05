import { IEpisode } from "../interfaces"

interface IEpisodeCardProps {
    episode: IEpisode
}

const EpisodeCard = ({episode}: IEpisodeCardProps) => {
  return (
    // <div className="card" id={episode.episodeid}>
    <div className="card">
      <div className="card-header">
        <img src={episode.imageurl} alt="" />
      </div>
      <div className="card-body">
        <div className="title-favoeite-wrapper">
          <div className="title">
            <h4 className="name">{episode.title}-{episode.program.name}</h4>
            {/* <span>{episode.starttimeutc}-{episode.endtimeutc}</span> */}
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