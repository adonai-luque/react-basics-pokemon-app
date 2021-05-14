import React from "react";

const Pagination = ({ gotoPrevPage, gotoNextPage }) => {
  return (
  <div className="pagination">
    {gotoPrevPage && <button onClick={gotoPrevPage}>Previous</button>}
    {gotoNextPage && <button onClick={gotoNextPage}>Next</button>}
  </div>
  );
};

export default Pagination;
