import ProgramCard from "../components/ProgramCard"
import { useContext, useEffect } from "react";
import { ProgramContext } from "../context/ProgramsContext";
import Pagination from "../components/Pagination";

const ProgramsList = () => {

  const {programs, currentProgramPage, totalProgramsPages, programsPagination} = useContext(ProgramContext)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentProgramPage]);

  return (
    <>
      <div className="cards-list">
        {programs.map((program) => {
          return <ProgramCard program={program} key={program.id} />;
        })}
      </div>
      <Pagination
        totalPages={totalProgramsPages}
        currentPage={currentProgramPage}
        pagination={programsPagination}
      />
    </>
  );
}

export default ProgramsList