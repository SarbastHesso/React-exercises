import ProgramCard from "../components/ProgramCard"
import { useEffect } from "react";
import { IProgram } from "../interfaces";

interface IProgramListProps {
  programs: IProgram[];
  currentProgramPage: number;
  totalProgramsPages: number;
  programsPagination: (page: number) => void;
}

const ProgramsList = (props: IProgramListProps) => {

  const renderPageNumbers = () => {
    const pageNumbers = [];
    const totalPages = props.totalProgramsPages;
    const currentPage = props.currentProgramPage;

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
        onClick={() => props.programsPagination(i)}
      >
        {i}
      </button>
    );
  }
  return pageNumbers;
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [props.currentProgramPage]);

  return (
    <>
      <div className="cards-list">
        {props.programs.map((program) => {
          return <ProgramCard program={program} key={program.id} />;
        })}
      </div>
      <div className="pagination">
        <button
          className={`previous-btn ${
            props.currentProgramPage === 1 ? "disabled" : ""
          }`}
          onClick={() => props.programsPagination(props.currentProgramPage - 1)}
          disabled={props.currentProgramPage === 1}
        >
          <span className="material-symbols-outlined">arrow_back_ios</span>
        </button>
        {renderPageNumbers()}
        <button
          className={`next-btn ${
            props.currentProgramPage == props.totalProgramsPages
              ? "disabled"
              : ""
          }`}
          onClick={() => props.programsPagination(props.currentProgramPage + 1)}
          disabled={props.currentProgramPage === props.totalProgramsPages}
        >
          <span className="material-symbols-outlined">arrow_forward_ios</span>
        </button>
      </div>
    </>
  );
}

export default ProgramsList