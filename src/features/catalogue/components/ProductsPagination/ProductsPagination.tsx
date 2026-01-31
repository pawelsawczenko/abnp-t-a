import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6';
import { usePaginationStore } from '../../stores/usePaginationStore';
import { ProductsPaginationButton } from './ProductsPaginationButton';

export const ProductsPagination = () => {
  const { pageNum, totalPages, nextPage, prevPage } = usePaginationStore();

  const scrollToTop = () => {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 0);
  };

  return (
    <div className="mb-8 flex justify-center gap-4">
      <ProductsPaginationButton
        onClick={() => {
          prevPage();
          scrollToTop();
        }}
        isDisabled={pageNum <= 1}>
        <FaArrowLeftLong className="text-black dark:text-white" />
      </ProductsPaginationButton>

      <span className="font-medium text-black dark:text-white">
        {pageNum} / {totalPages}
      </span>

      <ProductsPaginationButton
        onClick={() => {
          nextPage();
          scrollToTop();
        }}
        isDisabled={pageNum === totalPages}>
        <FaArrowRightLong className="text-black dark:text-white" />
      </ProductsPaginationButton>
    </div>
  );
};
