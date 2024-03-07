import { IBroadcast } from "../interfaces";

interface BoardcastCardProps {
  broadcast: IBroadcast;
//   playAudio: (src: string) => void;
}

// const BoardcastCard = ({ broadcast, playAudio }: BoardcastCardProps) => {
const BoardcastCard = ({ broadcast }: BoardcastCardProps) => {

    const duration = (broadcast.totalduration / 60).toFixed(1);

  return (
    <div className="card" id={broadcast.id.toString()}>
      <div className="card-header">
        <img src={broadcast.image} alt="" />
      </div>
      <div className="card-body">
        <div className="title-favoeite-wrapper">
          <div className="title">
            <h4 className="name">{broadcast.title}</h4>
          </div>
        </div>
        <div className="description">
          <p>{broadcast.description}</p>
          <span>{duration}min</span>
        </div>
      </div>
      {/* <div
        className="card-footer"
        onClick={() => playAudio(podfile.url)}
      >
        <span className="material-symbols-outlined">play_arrow</span>
        <span>LIVE</span>
        <span>{duration}min</span>
      </div> */}
    </div>
  );
};

export default BoardcastCard;
