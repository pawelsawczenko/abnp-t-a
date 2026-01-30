import type { ProductCardProps } from './types';

export const ProductCard = ({ id, title, price, description, image }: ProductCardProps) => {
  const handleAddToCart = () => {
    console.log(`id ${id} added to cart`);
  };

  return (
    <div className="relative w-xs rounded-md bg-stone-300 p-4 shadow-md transition hover:bg-stone-200 hover:shadow-xl dark:bg-slate-600 hover:dark:bg-slate-700">
      <img className="mb-4 h-48 w-full object-scale-down" src={image} alt={title} />

      <div className="mb-4 flex justify-between">
        <p className="pt-2 pb-2 font-semibold dark:text-white">{price}$</p>

        <button
          className="cursor-pointer rounded bg-amber-300 px-4 py-2 font-semibold hover:bg-amber-400 dark:bg-sky-600 dark:text-white hover:dark:bg-sky-500"
          onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>

      <h2 className="mb-2 font-bold dark:text-white">{title}</h2>

      <p className="font-thin dark:text-white">{description}</p>
    </div>
  );
};
