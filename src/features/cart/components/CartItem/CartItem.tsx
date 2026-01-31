import { FaBucket, FaMinus, FaPlus } from 'react-icons/fa6';
import { useCartStore } from '../../stores/useCartStore';
import type { ICartItemProps } from './types';
import { QuantityButton } from './QuantityButton';

export const CartItem = ({ id, title, price, image, quantity }: ICartItemProps) => {
  const increase = useCartStore((store) => store.increaseQuantity);
  const decrease = useCartStore((store) => store.decreaseQuantity);
  const remove = useCartStore((store) => store.removeItem);

  return (
    <div className="flex flex-wrap items-center justify-between gap-4 border-b border-stone-400 py-4 pr-2 dark:border-slate-500">
      <div className="flex w-xs gap-4 md:w-md">
        <img src={image} alt={title} className="h-16 w-16 object-contain" />

        <div className="flex-1">
          <h3 className="font-semibold dark:text-white">{title}</h3>
          <p className="text-slate-700 dark:text-slate-300">{price}$</p>
        </div>
      </div>

      <div className="flex w-xs items-center justify-end gap-2 md:w-auto">
        <div className="flex items-center gap-2">
          <QuantityButton onClick={() => decrease(id)}>
            <FaMinus />
          </QuantityButton>

          <span className="w-6 text-center dark:text-white">{quantity}</span>

          <QuantityButton onClick={() => increase(id)}>
            <FaPlus />
          </QuantityButton>
        </div>

        <button
          onClick={() => remove(id)}
          className="ml-4 text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-300">
          <FaBucket />
        </button>
      </div>
    </div>
  );
};
