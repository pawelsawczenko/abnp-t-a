import type { IQuantityButtonProps } from './types';

export const QuantityButton = ({ onClick, children }: IQuantityButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="rounded bg-amber-300 p-2 not-disabled:cursor-pointer not-disabled:hover:bg-amber-400 disabled:bg-stone-300 disabled:opacity-40 dark:bg-sky-600 dark:text-white not-disabled:hover:dark:bg-sky-500 disabled:dark:bg-slate-600">
      {children}
    </button>
  );
};
