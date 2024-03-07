import { IPodfile } from "../interfaces";

interface IPodfileCardProps {
  podfile: IPodfile;
  playAudio: (src: string) => void;
}

const PodfileCard = ({podfile, playAudio}: IPodfileCardProps) => {
  const duration = (podfile.duration / 60).toFixed(1);

  return (
    <div className="card" id={podfile.id.toString()}>
      <div className="card-body">
        <div className="title-favoeite-wrapper">
          <div className="title">
            <h4 className="name">{podfile.title}</h4>
          </div>
        </div>
        <div className="description">
          <p>{podfile.description}</p>
        </div>
      </div>
      <div className="card-footer" onClick={() => playAudio(podfile.url)}>
        <span className="material-symbols-outlined">play_arrow</span>
        <span>LIVE</span>
        <span>{duration}min</span>
      </div>
    </div>
  );
};

export default PodfileCard;
