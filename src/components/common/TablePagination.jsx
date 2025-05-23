import React from 'react';

const TablePagination = ({
  currentPage,
  totalPages,
  onPageChange,
  siblingCount = 1,
}) => {
  if (totalPages <= 1) return null;

  const range = (start, end) =>
    Array.from({ length: end - start + 1 }, (_, i) => i + start);

  const getPageNumbers = () => {
    const totalPageNumbers = siblingCount * 2 + 5;
    if (totalPages <= totalPageNumbers) return range(1, totalPages);

    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
    const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPages);

    const showLeftDots = leftSiblingIndex > 2;
    const showRightDots = rightSiblingIndex < totalPages - 2;

    const firstPageIndex = 1;
    const lastPageIndex = totalPages;

    if (!showLeftDots && showRightDots) {
      const leftItems = range(1, 3 + 2 * siblingCount);
      return [...leftItems, '...', totalPages];
    }

    if (showLeftDots && !showRightDots) {
      const rightItems = range(totalPages - (2 * siblingCount + 2), totalPages);
      return [firstPageIndex, '...', ...rightItems];
    }

    const middleRange = range(leftSiblingIndex, rightSiblingIndex);
    return [firstPageIndex, '...', ...middleRange, '...', lastPageIndex];
  };

  // for btn list
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages && page !== currentPage) {
      onPageChange(page);
    }
  };

  const pageNumbers = getPageNumbers();

  return (

    <div className="px-6 py-4 border-t border-gray-200 dark:border-white/[0.05]">
      <div className="flex items-center justify-between">
        <button
          disabled={currentPage === 1}
          onClick={() => onPageChange(currentPage - 1)}
          className={`inline-flex items-center justify-center gap-2 rounded-lg transition  px-4 py-3 text-sm bg-white text-gray-700 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-400 dark:ring-gray-700 dark:hover:bg-white/[0.03] dark:hover:text-gray-300 ${currentPage === 1 ? "cursor-not-allowed" : ""}`}>
          <svg className="fill-current" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M2.58301 9.99868C2.58272 10.1909 2.65588 10.3833 2.80249 10.53L7.79915 15.5301C8.09194 15.8231 8.56682 15.8233 8.85981 15.5305C9.15281 15.2377 9.15297 14.7629 8.86018 14.4699L5.14009 10.7472L16.6675 10.7472C17.0817 10.7472 17.4175 10.4114 17.4175 9.99715C17.4175 9.58294 17.0817 9.24715 16.6675 9.24715L5.14554 9.24715L8.86017 5.53016C9.15297 5.23717 9.15282 4.7623 8.85983 4.4695C8.56684 4.1767 8.09197 4.17685 7.79917 4.46984L2.84167 9.43049C2.68321 9.568 2.58301 9.77087 2.58301 9.99715C2.58301 9.99766 2.58301 9.99817 2.58301 9.99868Z" fill=""></path></svg>
          <span className="hidden sm:inline">Previous</span>
        </button>

        <span className="block text-sm font-medium text-gray-700 dark:text-gray-400 sm:hidden">Page 1 of 3</span>

        <ul className="hidden items-center gap-0.5 sm:flex">
          {pageNumbers.map((page, index) => (
            <li key={index}>
              <button
                disabled={page === '...'}
                onClick={() => handlePageChange(page)}

                className={`flex h-10 w-10 items-center justify-center rounded-lg text-theme-sm font-medium ${page === currentPage ? 'bg-brand-500 text-white' : 'text-gray-700 hover:bg-brand-500/[0.08] dark:hover:bg-brand-500 dark:hover:text-white hover:text-brand-500 dark:text-gray-400 '} `}>
                {page}
              </button>
            </li>
          ))}
        </ul>

        <button
          disabled={currentPage === totalPages}
          onClick={() => onPageChange(currentPage + 1)}
          className={`inline-flex items-center justify-center gap-2 rounded-lg transition  px-4 py-3 text-sm bg-white text-gray-700 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-400 dark:ring-gray-700 dark:hover:bg-white/[0.03] dark:hover:text-gray-300 ${currentPage === totalPages ? "cursor-not-allowed" : ""} `}>
          <span className="hidden sm:inline">Next</span>
          <svg className="fill-current" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M17.4175 9.9986C17.4178 10.1909 17.3446 10.3832 17.198 10.53L12.2013 15.5301C11.9085 15.8231 11.4337 15.8233 11.1407 15.5305C10.8477 15.2377 10.8475 14.7629 11.1403 14.4699L14.8604 10.7472L3.33301 10.7472C2.91879 10.7472 2.58301 10.4114 2.58301 9.99715C2.58301 9.58294 2.91879 9.24715 3.33301 9.24715L14.8549 9.24715L11.1403 5.53016C10.8475 5.23717 10.8477 4.7623 11.1407 4.4695C11.4336 4.1767 11.9085 4.17685 12.2013 4.46984L17.1588 9.43049C17.3173 9.568 17.4175 9.77087 17.4175 9.99715C17.4175 9.99763 17.4175 9.99812 17.4175 9.9986Z" fill=""></path></svg>
        </button>
      </div>
      <div>
      </div>
    </div>




  );
};

export default TablePagination

