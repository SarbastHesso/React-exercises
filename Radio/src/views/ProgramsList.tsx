import ProgramCard from "../components/ProgramCard"
import { useContext, useEffect } from "react";
import { ProgramContext } from "../context/ProgramsContext";

const ProgramsList = () => {

  const {programs, currentProgramPage, totalProgramsPages, programsPagination} = useContext(ProgramContext)

  const renderPageNumbers = () => {
    const pageNumbers = [];
    const totalPages = totalProgramsPages;
    const currentPage = currentProgramPage;

    let startPage = Math.max(1, currentPage - 2); 
    let endPage = Math.min(totalPages, startPage + 3);

    if (endPage - startPage < 3) {
      endPage = Math.min(totalPages, currentPage + 1);
      startPage = Math.max(1, endPage - 3);
    }

    for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(
      <button
        className={i === currentPage ? "page-number active" : "page-number"}
        key={i}
        onClick={() => programsPagination(i)}
      >
        {i}
      </button>
    );
  }
  return pageNumbers;
  };

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
      <div className="pagination">
        <button
          className={`previous-btn ${
            currentProgramPage === 1 ? "disabled" : ""
          }`}
          onClick={() => programsPagination(currentProgramPage - 1)}
          disabled={currentProgramPage === 1}
        >
          <span className="material-symbols-outlined">arrow_back_ios</span>
        </button>
        {renderPageNumbers()}
        <button
          className={`next-btn ${
            currentProgramPage == totalProgramsPages
              ? "disabled"
              : ""
          }`}
          onClick={() => programsPagination(currentProgramPage + 1)}
          disabled={currentProgramPage === totalProgramsPages}
        >
          <span className="material-symbols-outlined">arrow_forward_ios</span>
        </button>
      </div>
    </>
  );
}

export default ProgramsList