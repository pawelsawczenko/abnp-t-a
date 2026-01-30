import { create } from 'zustand';

interface PaginationState {
  pageNum: number;
  totalPages: number;
  setTotalPages: (num: number) => void;
  nextPage: () => void;
  prevPage: () => void;
  setPageNum: (num: number) => void;
}

export const usePaginationStore = create<PaginationState>((set, get) => ({
  pageNum: 1,
  totalPages: 1,

  setPageNum: (num) => set({ pageNum: num }),
  setTotalPages: (num) => set({ totalPages: num }),

  nextPage: () => {
    const { pageNum, totalPages } = get();
    if (pageNum < totalPages) set({ pageNum: pageNum + 1 });
  },
  prevPage: () => {
    const { pageNum } = get();
    if (pageNum > 1) set({ pageNum: pageNum - 1 });
  }
}));
