import { useEffect, useMemo } from 'react';
import type { IProduct } from '../../../types';
import { usePaginationStore } from '../stores/usePaginationStore';
import { PRODUCTS_PER_PAGE } from '../../../constants';

export const usePaginatedProducts = (products: IProduct[]) => {
  const { pageNum, totalPages, setTotalPages, setPageNum } = usePaginationStore();

  useEffect(() => {
    const total = Math.ceil(products.length / PRODUCTS_PER_PAGE);

    if (total !== totalPages) {
      setTotalPages(total);
      setPageNum(total ? 1 : 0);
    }
  }, [products, totalPages, setTotalPages, setPageNum]);

  const paginatedProducts = useMemo(() => {
    const lastIndex = pageNum * PRODUCTS_PER_PAGE;
    const firstIndex = lastIndex - PRODUCTS_PER_PAGE;

    return products.slice(firstIndex, lastIndex);
  }, [products, pageNum]);

  return paginatedProducts;
};
