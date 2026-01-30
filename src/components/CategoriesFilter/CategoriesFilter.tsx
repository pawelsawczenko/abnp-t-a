import { useCategoriesFilterStore } from '../../stores/useCategoriesFilterStore';
import { CategoryButton } from './CategoryButton';
import type { CategoriesFilterProps } from './types';

export const CategoriesFilter = ({ categories }: CategoriesFilterProps) => {
  const { selectedCategory, setSelectedCategory } = useCategoriesFilterStore();

  return (
    <div className="mb-6 flex flex-wrap gap-2">
      <CategoryButton
        onClick={() => setSelectedCategory(null)}
        isSelected={selectedCategory === null}
        category="All"
      />

      {categories?.map((category) => (
        <CategoryButton
          key={category}
          onClick={() => setSelectedCategory(category)}
          isSelected={selectedCategory === category}
          category={category}
        />
      ))}
    </div>
  );
};
