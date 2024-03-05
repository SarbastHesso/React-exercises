interface IPaginationProps {
    totalPages: number;
    currentPage: number;
    pagination: (pageNumber: number) => void;
}

const Pagination = ({totalPages, currentPage, pagination}: IPaginationProps) => {

    const renderPageNumbers = () => {
        const pageNumbers = [];

        let startPage = Math.max(1, currentPage - 2);
        let endPage = Math.min(totalPages, startPage + 3);

        if (endPage - startPage < 3) {
            endPage = Math.min(totalPages, currentPage + 1);
            startPage = Math.max(1, endPage - 3);
        }

        for (let i = startPage; i <= endPage; i++) {
            pageNumbers.push(
              <button
                className={
                  i === currentPage ? "page-number active" : "page-number"
                }
                key={i}
                onClick={() => pagination(i)}
              >
                {i}
              </button>
            );
        }
        return pageNumbers;
    };
  return (
    <div className="pagination">
      <button
        className={`previous-btn ${currentPage === 1 ? "disabled" : ""}`}
        onClick={() => pagination(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <span className="material-symbols-outlined">arrow_back_ios</span>
      </button>
      {renderPageNumbers()}
      <button
        className={`next-btn ${currentPage == totalPages ? "disabled" : ""}`}
        onClick={() => pagination(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <span className="material-symbols-outlined">arrow_forward_ios</span>
      </button>
    </div>
  );
}

export default Pagination