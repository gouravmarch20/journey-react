import React, { useState } from "react";

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  const getPageNumbers = () => {
    const pageNumbers = [];
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) pageNumbers.push(i);
    } else {
      // 1 push if  current page not 1 ==> avoid middle logic
      if (currentPage > 2) pageNumbers.push(1);
      // add ... (ellipsis) if currentPage is greater than 3
      if (currentPage > 3) pageNumbers.push("...");
      // currentPage prev 
      if (currentPage > 1) pageNumbers.push(currentPage - 1);
      //* add current page
      pageNumbers.push(currentPage);
      // Ensures smooth navigation. after current page
      if (currentPage < totalPages) pageNumbers.push(currentPage + 1);
      // Add ... before the last page (if the gap is large).
      if (currentPage < totalPages - 2) pageNumbers.push("...");
      // Always show the last page

      if (currentPage < totalPages - 1) pageNumbers.push(totalPages);
    }
    return pageNumbers;
  };
  console.log("getPageNumbers", getPageNumbers());

  return (
    <div style={{ marginTop: "10px" }}>
      {currentPage > 1 && (
        <button onClick={() => onPageChange(currentPage - 1)}>Previous</button>
      )}

      {getPageNumbers().map((page, index) => (
        <button
          key={index}
          onClick={() => typeof page === "number" && onPageChange(page)}
          disabled={currentPage === page || page === "..."}
          style={{
            fontWeight: currentPage === page ? "bold" : "normal",
            margin: "0 5px",
          }}
        >
          {page}
        </button>
      ))}

      {currentPage < totalPages && (
        <button onClick={() => onPageChange(currentPage + 1)}>Next</button>
      )}
    </div>
  );
};

const PaginatedList = ({ items, itemsPerPage }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(items.length / itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>Pagination Example</h1>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {currentItems.map((item, index) => (
          <li key={index} style={{ margin: "5px 0" }}>
            {item}
          </li>
        ))}
      </ul>
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

const App = () => {
  const items = Array.from({ length: 100 }, (_, i) => `Item ${i + 1}`);
  return <PaginatedList items={items} itemsPerPage={5} />;
};

export default App;
// totalPages	currentPage	Pagination Output
// 5 	1	1 2 3 4 5
// 10	1	1 2 ... 10
// 10	2	1 2 3 ... 10
// 10	5	1 ... 4 5 6 ... 10
// 10	9	1 ... 8 9 10
// 10	10	1 ... 8 9 10
