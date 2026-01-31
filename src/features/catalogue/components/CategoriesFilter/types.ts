export interface ICategoryButtonProps {
  category: string;
  isSelected: boolean;
  onClick: () => void;
}

export interface ICategoriesFilterProps {
  categories: string[];
}
