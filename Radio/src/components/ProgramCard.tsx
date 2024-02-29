import { IProgram } from "../interfaces";

interface IProgramCardProps {
  program: IProgram;
}

const ProgramCard = (props: IProgramCardProps) => {
  return (
    <div className="card" id={props.program.id.toString()}>
      <div className="image-container">
        <img src={props.program.programimage} alt="" />
      </div>
      <div className="card-body">
        <div className="title-favoeite-wrapper">
          <div className="title">
            <h4 className="name">{props.program.name}</h4>
          </div>
          <span className="favorite-icon material-symbols-outlined">star</span>
        </div>
        <div className="description">
          <p>{props.program.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProgramCard;
