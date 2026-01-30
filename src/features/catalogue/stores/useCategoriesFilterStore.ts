import { create } from 'zustand';

interface CategoriesFilterState {
  selectedCategory: string | null;
  setSelectedCategory: (category: string | null) => void;
}

export const useCategoriesFilterStore = create<CategoriesFilterState>((set) => ({
  selectedCategory: null,
  setSelectedCategory: (category) => set({ selectedCategory: category })
}));
