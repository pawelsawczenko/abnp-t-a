import type { ProductsPaginationButtonProps } from './types';

export const ProductsPaginationButton = ({
  onClick,
  isDisabled,
  children
}: ProductsPaginationButtonProps) => {
  return (
    <button
      className="rounded bg-amber-300 p-2 not-disabled:cursor-pointer not-disabled:hover:bg-amber-400 disabled:bg-stone-300 disabled:opacity-40 dark:bg-sky-600 not-disabled:hover:dark:bg-sky-500 disabled:dark:bg-slate-600"
      onClick={onClick}
      disabled={isDisabled}>
      {children}
    </button>
  );
};
