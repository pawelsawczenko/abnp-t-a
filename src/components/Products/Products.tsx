import { useEffect, useRef } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getProducts } from '../../api/productsAPI';
import { ProductCard } from '../ProductCard/ProductCard';
import { SkeletonCard } from '../ProductCard/SkeletonCard';
import { ProductsPagination } from '../ProductsPagination/ProductsPagination';
import { usePaginationStore } from '../../stores/productsPaginationStore';

const PRODUCTS_PER_PAGE = 12;

export const Products = () => {
  const {
    data: products,
    isLoading,
    isError,
    error
  } = useQuery({
    queryKey: ['products'],
    queryFn: getProducts
  });

  const { pageNum, setTotalPages } = usePaginationStore();

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (products) {
      const total = Math.ceil(products.length / PRODUCTS_PER_PAGE);
      setTotalPages(total);
    }
  }, [products, setTotalPages]);

  useEffect(() => {
    containerRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [pageNum]);

  const lastIndex = pageNum * PRODUCTS_PER_PAGE;
  const firstIndex = lastIndex - PRODUCTS_PER_PAGE;

  if (isLoading) {
    return (
      <div className="mb-4 grid w-xs gap-x-8 gap-y-4 md:w-2xl md:grid-cols-2 xl:w-5xl xl:grid-cols-3">
        {[...Array(PRODUCTS_PER_PAGE)].map((_, i) => (
          <SkeletonCard key={`${i}-skeleton-card`} />
        ))}
      </div>
    );
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <div
        ref={containerRef}
        className="mb-8 grid w-xs gap-x-8 gap-y-4 pt-4 md:w-2xl md:grid-cols-2 xl:w-5xl xl:grid-cols-3">
        {products ? (
          products
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
