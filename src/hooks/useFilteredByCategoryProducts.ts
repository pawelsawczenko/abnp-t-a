// hooks/useFilteredProducts.ts
import { useMemo } from 'react';
import type { Product } from '../types';
import { useCategoriesFilterStore } from '../stores/useCategoriesFilterStore';

export const useFilteredByCategoryProducts = (products: Product[] | undefined) => {
  const { selectedCategory } = useCategoriesFilterStore();

  const filteredProducts = useMemo(() => {
    if (!products) return [];

    return selectedCategory
      ? products.filter((product) => product.category === selectedCategory)
      : products;
  }, [products, selectedCategory]);

  return filteredProducts;
};
