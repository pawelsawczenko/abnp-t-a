import { FaCartShopping, FaStore } from 'react-icons/fa6';
import { DarkModeToggle } from '../DarkModeToggle/DarkModeToggle';
import { NavLink } from 'react-router';
import { useCartStore } from '../../features/cart/stores/useCartStore';

export const Header = () => {
  const total = useCartStore((store) => store.getTotalItems());

  return (
    <header className="flex justify-center bg-stone-400 p-4 dark:bg-slate-900">
      <div className="flex w-xs justify-between md:w-2xl xl:w-5xl">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? 'border-b-2 border-amber-300 text-amber-300 dark:border-sky-600 dark:text-sky-600'
              : 'border-b-2 border-black text-black hover:border-slate-300 dark:border-white dark:text-white hover:text-slate-300'
          }>
          <FaStore className="text-2xl" />
        </NavLink>

        <div className="flex justify-between gap-4">
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              isActive
                ? 'relative border-b-2 border-amber-300 text-amber-300 dark:border-sky-600 dark:text-sky-600'
                : 'relative border-b-2 border-black text-black hover:border-slate-300 dark:border-white dark:text-white hover:text-slate-300'
            }>
            <span className="text-s absolute top-0 -left-4 text-black dark:text-white hover:text-slate-300">
              {total}
            </span>

            <FaCartShopping className="text-2xl" />
          </NavLink>

          <DarkModeToggle />
        </div>
      </div>
    </header>
  );
};
