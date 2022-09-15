import React from "react";

export default function Pagination(props) {
  const { currentPage, setCurrentPage, totalPages } = props;

  return (
    <ul className="pagination justify-content-center mt-5">
      <li className={`page-item ${currentPage <= 1 && "disabled"}`}>
        <button
          className="page-link"
          onClick={() =>
            currentPage > 1 ? setCurrentPage(currentPage - 1) : null
          }
        >
          Previous
        </button>
      </li>
      <li className={`page-item ${currentPage === totalPages && "disabled"}`}>
        <button
          className="page-link"
          onClick={() =>
            currentPage < totalPages ? setCurrentPage(currentPage + 1) : null
          }
        >
          Next
        </button>
      </li>
    </ul>
  );
}
