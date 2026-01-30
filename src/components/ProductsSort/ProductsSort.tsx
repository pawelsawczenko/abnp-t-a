import { useSortStore, type SortOption } from '../../stores/useSortStore';

export const ProductsSort = () => {
  const { sort, setSort } = useSortStore();
  return (
    <select
      value={sort}
      onChange={(e) => setSort(e.target.value as SortOption)}
      className="mb-4 w-full max-w-xs rounded border bg-stone-300 p-2 hover:bg-stone-200 xl:w-2xl dark:bg-slate-600 dark:text-white hover:dark:bg-slate-700">
      <option value="none">Default sorting</option>
      <option value="price-asc">Price: Low → High</option>
      <option value="price-desc">Price: High → Low</option>
      <option value="name-asc">Name: A → Z</option>
      <option value="name-desc">Name: Z → A</option>
    </select>
  );
};
