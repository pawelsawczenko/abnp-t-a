import { CartItem } from './components/CartItem/CartItem';
import { useCartStore } from './stores/useCartStore';

export const Cart = () => {
  const items = useCartStore((store) => store.items);
  const totalPrice = useCartStore((store) => store.getTotalPrice());
  const clearCart = useCartStore((store) => store.clearCart);

  if (items.length === 0) {
    return <h2 className="mt-10 text-center text-xl dark:text-white">Cart is empty.</h2>;
  }

  return (
    <>
      <h2 className="mb-4 text-2xl font-bold dark:text-white">Cart</h2>

      <div className="rounded bg-stone-300 p-4 shadow-md dark:bg-slate-600">
        {items.map((item) => (
          <CartItem
            key={item.product.id}
            id={item.product.id}
            title={item.product.title}
            price={item.product.price}
            image={item.product.image}
            quantity={item.quantity}
          />
        ))}

        <div className="mt-4 flex items-center justify-between text-lg font-semibold dark:text-white">
          <span>Overall:</span>
          <span>{totalPrice.toFixed(2)}$</span>
        </div>

        <button
          onClick={clearCart}
          className="mt-4 w-full rounded bg-amber-300 py-3 transition hover:bg-amber-400 dark:bg-sky-600 dark:text-white hover:dark:bg-sky-500">
          Clear Cart
        </button>
      </div>
    </>
  );
};
