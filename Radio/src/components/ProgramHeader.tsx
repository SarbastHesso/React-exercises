import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { ProgramInfoContext } from "../context/ProgramContext";

const ProgramHeader = () => {
  const { programId } = useParams();

  const { program } = useContext(ProgramInfoContext);

  return (
    <>
      <header className="subroute-header">
        <div className="subroute-title">
          <h3>{program?.name}</h3>
        </div>
        <nav className="subroute-navbar">
          <Link to={`/program/${programId}/info`} className="subroute-navlink">
            Program
          </Link>
          <Link
            to={`/program/${programId}/broadcasts`}
            className="subroute-navlink"
          >
            Sändningar
          </Link>
          <Link
            to={`/program/${programId}/podfiles`}
            className="subroute-navlink"
          >
            Podd
          </Link>
        </nav>
      </header>
    </>
  );
}

export default ProgramHeader