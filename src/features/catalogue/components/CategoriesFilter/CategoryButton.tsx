import type { CategoryButtonProps } from './types';

export const CategoryButton = ({ category, isSelected, onClick }: CategoryButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`rounded px-4 py-2 dark:text-white ${isSelected ? 'bg-amber-400 dark:bg-sky-500' : 'bg-amber-200 dark:bg-sky-800'}`}>
      {category.charAt(0).toUpperCase() + category.slice(1)}
    </button>
  );
};
