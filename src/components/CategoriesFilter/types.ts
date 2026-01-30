export interface CategoryButtonProps {
  category: string;
  isSelected: boolean;
  onClick: () => void;
}

export interface CategoriesFilterProps {
  categories: string[];
}
