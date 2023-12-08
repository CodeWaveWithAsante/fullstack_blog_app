const Pagination = ({ totalPages, onPageChange }) => {
  const searchParams = new URLSearchParams(window.location.search);
  const currentPage = parseInt(searchParams.get("page")) || 1;

  const range = (start, end) =>
    Array.from({ length: end - start + 1 }, (_, i) => start + i);

  const showEllipses = totalPages > 8;

  return (
    <div className='pagination'>
      <button
        className='pagination-btn'
        onClick={() => onPageChange(Math.max(currentPage - 1, 1))}
        disabled={currentPage === 1}
      >
        Prev
      </button>

      {showEllipses && currentPage > 4 && (
        <>
          <button className='pagination-btn' onClick={() => onPageChange(1)}>
            1
          </button>
          <span className='pagination-ellipsis'>...</span>
        </>
      )}

      {range(
        Math.max(1, currentPage - 3),
        Math.min(totalPages, currentPage + 4)
      ).map((page) => (
        <button
          key={page}
          className={`pagination-btn ${page === currentPage ? "active" : ""}`}
          onClick={() => onPageChange(page)}
        >
          {page}
        </button>
      ))}

      {showEllipses && currentPage < totalPages - 3 && (
        <>
          <span className='pagination-ellipsis'>...</span>
          <button
            className='pagination-btn'
            onClick={() => onPageChange(totalPages)}
          >
            {totalPages}
          </button>
        </>
      )}

      <button
        className='pagination-btn'
        onClick={() => onPageChange(Math.min(currentPage + 1, totalPages))}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
