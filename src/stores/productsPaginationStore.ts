import { create } from 'zustand';

interface PaginationState {
  pageNum: number;
  totalPages: number;
  setTotalPages: (n: number) => void;
  nextPage: () => void;
  prevPage: () => void;
  setPage: (n: number) => void;
}

export const usePaginationStore = create<PaginationState>((set, get) => ({
  pageNum: 1,
  totalPages: 1,

  setPage: (n) => set({ pageNum: n }),
  setTotalPages: (n) => set({ totalPages: n }),

  nextPage: () => {
    const { pageNum, totalPages } = get();
    if (pageNum < totalPages) set({ pageNum: pageNum + 1 });
  },
  prevPage: () => {
    const { pageNum } = get();
    if (pageNum > 1) set({ pageNum: pageNum - 1 });
  }
}));
