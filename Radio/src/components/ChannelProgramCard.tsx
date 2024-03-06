import { IChannelProgram } from "../interfaces";

interface IChannelProgramCardProps {
  program: IChannelProgram;
}

const ChannelProgramCard = ({ program }: IChannelProgramCardProps) => {
  return (
    <div className="card" id={program.id.toString()}>
      <div className="card-header">
        <img src={program.programimage} alt="" />
      </div>
      <div className="card-body">
        <div className="title-favoeite-wrapper">
          <div className="title">
            <h4 className="name">{program.name}</h4>
          </div>
          <span className="favorite-icon material-symbols-outlined">star</span>
        </div>
        <div className="description">
          <p>{program.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ChannelProgramCard