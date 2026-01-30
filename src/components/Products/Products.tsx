import { useEffect, useRef } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getProducts } from '../../api/productsAPI';
import { ProductCard } from '../ProductCard/ProductCard';
import { SkeletonCard } from '../ProductCard/SkeletonCard';
import { ProductsPagination } from '../ProductsPagination/ProductsPagination';
import { usePaginationStore } from '../../stores/usePaginationStore';
import { getCategories } from '../../api/categoriesAPI';
import { CategoriesFilter } from '../CategoriesFilter/CategoriesFilter';
import { PRODUCTS_PER_PAGE } from '../../constants';
import { usePaginatedProducts } from '../../hooks/usePaginatedProducts';
import { useFilteredByCategoryProducts } from '../../hooks/useFilteredByCategoryProducts';
import { useProductSearch } from '../../hooks/useProductSearch';
import { ProductsSearchInput } from '../ProductsSearchInput/ProductsSearchInput';
import { useSortedProducts } from '../../hooks/useSortedProducts';
import { ProductsSort } from '../ProductsSort/ProductsSort';

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

  const { pageNum } = usePaginationStore();

  const { search, setSearch, filteredProducts } = useProductSearch(products);
  const filteredByCategoryProducts = useFilteredByCategoryProducts(filteredProducts);
  const sortedProducts = useSortedProducts(filteredByCategoryProducts);
  const paginatedProducts = usePaginatedProducts(sortedProducts);

  const containerRef = useRef<HTMLDivElement>(null);

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
    <div ref={containerRef} className="pt-2">
      <CategoriesFilter categories={categories || []} />

      <div className="flex flex-wrap justify-between">
        <ProductsSearchInput search={search} setSearch={setSearch} />

        <ProductsSort />
      </div>

      <div className="mb-4 grid w-xs gap-x-8 gap-y-4 md:w-2xl md:grid-cols-2 xl:w-5xl xl:grid-cols-3">
        {paginatedProducts.length > 0 ? (
          paginatedProducts.map((product) => (
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
          <p className="flex justify-between font-semibold dark:text-white">
            There are no items in the store
          </p>
        )}
      </div>

      <ProductsPagination />
    </div>
  );
};
