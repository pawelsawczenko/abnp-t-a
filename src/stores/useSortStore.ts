import { create } from 'zustand';

export type SortOption = 'price-asc' | 'price-desc' | 'name-asc' | 'name-desc' | 'none';

interface SortState {
  sort: SortOption;
  setSort: (sort: SortOption) => void;
}

export const useSortStore = create<SortState>((set) => ({
  sort: 'none',
  setSort: (sort) => set({ sort })
}));
