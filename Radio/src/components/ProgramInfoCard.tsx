import { Link } from "react-router-dom";
import { IProgram } from "../interfaces";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";

interface IProgramInfoCardProps {
    program: IProgram;
}

const ProgramInfoCard = ({ program }: IProgramInfoCardProps) => {
  return (
    <div className="card" id={program.id.toString()}>
      <Link to={program.programurl} target="blank" className="card-header">
        <img src={program.programimage} alt="" />
      </Link>
      <div className="card-body">
        <div className="title-favoeite-wrapper">
          <div className="title">
            <h4 className="name">
              Radiopresentatör: {program.responsibleeditor}
            </h4>
          </div>
          <span className="favorite-icon material-symbols-outlined">star</span>
        </div>
        <div className="description">
          <p>{program.description}</p>
        </div>
        <div className="description">
          <p>{program.broadcastinfo}</p>
        </div>
      </div>
      <footer className="card-footer">
        <div className="socialmedia-icons">
          {program.socialmediaplatforms && program.socialmediaplatforms[0] && (
            <Link to={program.socialmediaplatforms[0].platformurl} target="blank">
              <FontAwesomeIcon icon={faFacebook} className="socialmedia-icon" />
            </Link>
          )}
          {program.socialmediaplatforms && program.socialmediaplatforms[1] && (
            <Link to={program.socialmediaplatforms[1].platformurl} target="blank">
              <FontAwesomeIcon icon={faTwitter} className="socialmedia-icon" />
            </Link>
          )}
          {program.socialmediaplatforms && program.socialmediaplatforms[2] && (
            <Link to={program.socialmediaplatforms[2].platformurl} target="blank">
              <FontAwesomeIcon icon={faInstagram} className="socialmedia-icon" />
            </Link>
          )}
        </div>
      </footer>
    </div>
  );
};

export default ProgramInfoCard