import { Bounce, toast } from 'react-toastify';
import { useCartStore } from '../../features/cart/stores/useCartStore';
import type { ProductCardProps } from './types';
import { FaRegCircleDot, FaRegCircleXmark } from 'react-icons/fa6';

const isInStock = true;

export const ProductCard = ({
  id,
  title,
  price,
  description,
  image,
  rating,
  category
}: ProductCardProps) => {
  const addItem = useCartStore((store) => store.addItem);

  const handleAddToCart = () => {
    addItem({ id, title, price, description, image, rating, category });

    toast.success(`${title} added to cart`, {
      position: 'top-center',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      transition: Bounce
    });
  };

  return (
    <div className="relative w-xs rounded-md bg-stone-300 p-4 shadow-md transition hover:bg-stone-200 hover:shadow-xl dark:bg-slate-600 hover:dark:bg-slate-700">
      <img className="mb-4 h-48 w-full object-scale-down" src={image} alt={title} />

      <div className="mb-4 flex justify-between">
        <p className="pt-2 pb-2 font-semibold dark:text-white">{price}$</p>

        <div
          className={`flex items-center gap-2 pt-2 pb-2 font-semibold ${isInStock ? 'text-green-600' : 'text-red-400'}`}>
          {isInStock ? (
            <FaRegCircleDot />
          ) : (
            <>
              <FaRegCircleXmark /> not
            </>
          )}{' '}
          in stock
        </div>

        <button
          className="rounded bg-amber-300 px-4 py-2 font-semibold not-disabled:cursor-pointer not-disabled:hover:bg-amber-400 disabled:bg-stone-400 disabled:opacity-40 dark:bg-sky-600 dark:text-white not-disabled:hover:dark:bg-sky-500 disabled:dark:bg-slate-700"
          onClick={handleAddToCart}
          disabled={!isInStock}>
          Add to Cart
        </button>
      </div>

      <h2 className="mb-2 font-bold dark:text-white">{title}</h2>

      <p className="font-thin dark:text-white">{description}</p>
    </div>
  );
};
