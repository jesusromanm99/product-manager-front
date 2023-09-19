import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type props = {
  handlePageChange: (page: number) => void;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  totalPages: number;
  page: number;
};
function Pagination({ handlePageChange, totalPages, hasPrevPage, hasNextPage, page }: props) {
  return (
    <div className='flex flex-col items-center gap-1'>
      <span className='text-sm text-gray-900'>
        Showing {""}
        <span className='font-semibold text-gray-900'>{page}</span> to {""}
        <span className='font-semibold text-gray-900 '>10</span> of{" "}
        <span className='font-semibold text-gray-900 '>{totalPages}</span> Entries
      </span>
      <div className='flex'>
        <button
          disabled={hasPrevPage == false}
          onClick={() => handlePageChange(page - 1)}
          className={`flex items-center gap-1 justify-center px-3 h-8 mr-3 text-sm font-medium bg-orange-500 text-white  ${
            hasPrevPage == false && "bg-opacity-70 cursor-not-allowed"
          } rounded-lg  `}
        >
          <FontAwesomeIcon icon={faArrowLeft} />
          Previous
        </button>

        <button
          disabled={hasNextPage == false}
          onClick={() => handlePageChange(page + 1)}
          className={`flex items-center gap-1 justify-center px-3 h-8 mr-3 text-sm font-medium bg-orange-500 text-white  ${
            hasNextPage == false && "bg-opacity-70 cursor-not-allowed"
          } rounded-lg  `}
        >
          Next
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
    </div>
  );
}

export default Pagination;
