import { useQuery } from '@tanstack/react-query'
import { getProducts } from '../../api/productsAPI'

import { ProductCard } from '../ProductCard/ProductCard'
import { SkeletonCard } from '../ProductCard/SkeletonCard'

export const Products = () => {
  const {
    data: products,
    isLoading,
    isError,
    error
  } = useQuery({
    queryKey: ['products'],
    queryFn: getProducts
  })

  if (isLoading) {
    return (
      <div className="mb-4 grid w-xs gap-x-8 gap-y-4 md:w-2xl md:grid-cols-2 xl:w-5xl xl:grid-cols-3">
        {[...Array(12)].map((_, i) => (
          <SkeletonCard key={`${i}-skeleton-card`} />
        ))}
      </div>
    )
  }

  if (isError) {
    return <div>Error: {error.message}</div>
  }

  return (
    <div className="mb-4 grid w-xs gap-x-8 gap-y-4 md:w-2xl md:grid-cols-2 xl:w-5xl xl:grid-cols-3">
      {products ? (
        products.map((product) => (
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
  )
}
