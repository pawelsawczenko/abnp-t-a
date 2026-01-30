import { useEffect, useMemo, useRef } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getProducts } from '../../api/productsAPI';
import { ProductCard } from '../ProductCard/ProductCard';
import { SkeletonCard } from '../ProductCard/SkeletonCard';
import { ProductsPagination } from '../ProductsPagination/ProductsPagination';
import { usePaginationStore } from '../../stores/productsPaginationStore';
import { getCategories } from '../../api/categoriesAPI';
import { CategoriesFilter } from '../CategoriesFilter/CategoriesFilter';
import { useProductsCategoriesFilterStore } from '../../stores/productsCategoriesFilterStore';
import { PRODUCTS_PER_PAGE } from '../../constants';

export const Products = () => {
  const {
    data: products,
    isLoading: isLoadingProducts,
    isError: isErrorProducts,
    error: errorProducts
  } = useQuery({
    queryKey: ['products'],
    queryFn: getProducts
  });

  const {
    data: categories,
    isLoading: isLoadingCategories,
    isError: isErrorCategories,
    error: errorCategories
  } = useQuery({
    queryKey: ['categories'],
    queryFn: getCategories
  });

  const { selectedCategory } = useProductsCategoriesFilterStore();

  const { pageNum, totalPages, setTotalPages, setPageNum } = usePaginationStore();

  const filteredProducts = useMemo(() => {
    if (!products) return [];
    return selectedCategory ? products.filter((p) => p.category === selectedCategory) : products;
  }, [products, selectedCategory]);

  const lastIndex = pageNum * PRODUCTS_PER_PAGE;
  const firstIndex = lastIndex - PRODUCTS_PER_PAGE;

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const total = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);
    if (total !== totalPages) {
      setTotalPages(total);
      setPageNum(1);
    }
  }, [filteredProducts, totalPages, setTotalPages, setPageNum]);

  useEffect(() => {
    containerRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [pageNum]);

  if (isLoadingProducts || isLoadingCategories) {
    return (
      <div className="mb-4 grid w-xs gap-x-8 gap-y-4 md:w-2xl md:grid-cols-2 xl:w-5xl xl:grid-cols-3">
        {[...Array(PRODUCTS_PER_PAGE)].map((_, i) => (
          <SkeletonCard key={`${i}-skeleton-card`} />
        ))}
      </div>
    );
  }

  if (isErrorProducts || isErrorCategories) {
    return (
      <div>
        Error: {errorProducts?.message} {errorCategories?.message}
      </div>
    );
  }

  return (
    <>
      <CategoriesFilter categories={categories || []} />

      <div
        ref={containerRef}
        className="mb-8 grid w-xs gap-x-8 gap-y-4 pt-4 md:w-2xl md:grid-cols-2 xl:w-5xl xl:grid-cols-3">
        {filteredProducts.length > 0 ? (
          filteredProducts
            .slice(firstIndex, lastIndex)
            .map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                title={product.title}
                price={product.price}
                description={product.description}
                image={product.image}
              />
            ))
        ) : (
          <p>store is empty</p>
        )}
      </div>

      <ProductsPagination />
    </>
  );
};
