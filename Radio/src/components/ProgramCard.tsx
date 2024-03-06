import { Link } from "react-router-dom";
import { IProgram } from "../interfaces";

interface IProgramCardProps {
  program: IProgram;
}

const ProgramCard = (props: IProgramCardProps) => {
  return (
    <div className="card" id={props.program.id.toString()}>
      <Link to={`/program/${props.program.id}`} className="card-header">
        <img src={props.program.programimage} alt="" />
      </Link>
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
