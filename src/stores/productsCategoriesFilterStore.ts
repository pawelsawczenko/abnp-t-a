import { create } from 'zustand';

interface ProductsCategoriesFilterState {
  selectedCategory: string | null;
  setSelectedCategory: (category: string | null) => void;
}

export const useProductsCategoriesFilterStore = create<ProductsCategoriesFilterState>((set) => ({
  selectedCategory: null,
  setSelectedCategory: (category) => set({ selectedCategory: category })
}));
