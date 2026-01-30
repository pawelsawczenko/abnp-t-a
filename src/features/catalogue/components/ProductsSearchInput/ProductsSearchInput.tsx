import type { ProductsSearchInputProps } from './types';

export const ProductsSearchInput = ({ search, setSearch }: ProductsSearchInputProps) => {
  return (
    <>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search products..."
        className="mb-4 w-xs rounded border bg-stone-300 p-2 hover:bg-stone-200 xl:w-2xl dark:bg-slate-600 dark:text-white hover:dark:bg-slate-700"
      />
    </>
  );
};
