import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6';
import { usePaginationStore } from '../../stores/productsPaginationStore';

export const ProductsPagination = () => {
  const { pageNum, totalPages, nextPage, prevPage } = usePaginationStore();

  return (
    <div className="mb-8 flex justify-center gap-4">
      <button
        className="rounded bg-stone-300 p-2 not-disabled:hover:bg-stone-200 disabled:opacity-50 dark:bg-slate-600 hover:dark:bg-slate-700"
        onClick={prevPage}
        disabled={pageNum === 1}>
        <FaArrowLeftLong className="text-black dark:text-white" />
      </button>

      <span className="font-medium text-black dark:text-white">
        {pageNum} / {totalPages}
      </span>

      <button
        className="rounded bg-stone-300 p-2 not-disabled:hover:bg-stone-200 disabled:opacity-50 dark:bg-slate-600 hover:dark:bg-slate-700"
        onClick={nextPage}
        disabled={pageNum === totalPages}>
        <FaArrowRightLong className="text-black dark:text-white" />
      </button>
    </div>
  );
};
