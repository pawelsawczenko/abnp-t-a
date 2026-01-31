import { useState, useMemo } from 'react';
import type { IProduct } from '../../../types';
import { useDebounce } from '../../../hooks/useDebounce';

export const useProductSearch = (products: IProduct[] | undefined) => {
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
