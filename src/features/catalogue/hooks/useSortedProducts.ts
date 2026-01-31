import { useSortStore } from '../stores/useSortStore';
import type { IProduct } from '../../../types';

export const useSortedProducts = (products: IProduct[] = []) => {
  const { sort } = useSortStore();

  const sortedProducts = [...products].sort((a, b) => {
    switch (sort) {
      case 'price-asc':
        return a.price - b.price;
      case 'price-desc':
        return b.price - a.price;
      case 'name-asc':
        return a.title.localeCompare(b.title);
      case 'name-desc':
        return b.title.localeCompare(a.title);
      default:
        return 0;
    }
  });

  return sortedProducts;
};
