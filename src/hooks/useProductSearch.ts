import { useState, useMemo } from 'react';
import type { Product } from '../types';
import { useDebounce } from './useDebounce';

export const useProductSearch = (products: Product[] | undefined) => {
  const [search, setSearch] = useState('');
  const debouncedSearch = useDebounce(search, 300);

  const filteredProducts = useMemo(() => {
    if (!products) return [];

    if (!debouncedSearch.trim()) return products;

    return products.filter((product) =>
      product.title.toLowerCase().includes(debouncedSearch.toLowerCase())
    );
  }, [products, debouncedSearch]);

  return {
    search,
    setSearch,
    filteredProducts
  };
};
