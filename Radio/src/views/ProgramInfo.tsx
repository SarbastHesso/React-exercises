import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom"
import { ProgramInfoContext } from "../context/ProgramContext";
import ProgramInfoCard from "../components/ProgramInfoCard";

const ProgramInfo = () => {

  const {programId} = useParams();
  const {program, saveProgramId} = useContext(ProgramInfoContext);

  useEffect(() => {
    if (programId){
      saveProgramId(programId)
    }
  }, [programId, saveProgramId])

  return (
    <div className="card-info-container">
      {
        program && (
          <ProgramInfoCard program={program}/>
        )
      }
    </div>
  )
}

export default ProgramInfo