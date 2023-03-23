interface PaginationProps {
  publicationsPerPage: number;
  totalPublications: number;
  currentPage: number;
  onPageChange: (pageNumber: number) => void;
}

const Pagination = ({
  publicationsPerPage,
  totalPublications,
  currentPage,
  onPageChange,
}: PaginationProps) => {
  const totalPages = Math.ceil(totalPublications / publicationsPerPage);

  const renderPageNumbers = () => {
    const pageNumbers = [];

    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <li
          key={i}
          className={`${i === currentPage + 1 ? "text-yellow-500" : ""} cursor-pointer text-lg`}
          onClick={() => onPageChange(i - 1)}
        >
          {i}
        </li>,
      );
    }

    return pageNumbers;
  };

  return (
    <div className="flex w-full justify-center">
      <ul className="inline-flex gap-2">
        <li
          className={`${currentPage === 0 ? "hidden" : ""} cursor-pointer `}
          onClick={() => onPageChange(currentPage - 1)}
        >
          &laquo;
        </li>
        {renderPageNumbers()}
        <li
          className={`${currentPage === totalPages - 1 ? "hidden" : ""}
            } cursor-pointer`}
          onClick={() => onPageChange(currentPage + 1)}
        >
          &raquo;
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
