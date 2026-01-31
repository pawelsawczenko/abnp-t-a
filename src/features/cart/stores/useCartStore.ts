import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { IProduct } from '../../../types';

interface ICartItem {
  product: IProduct;
  quantity: number;
}

interface ICartState {
  items: ICartItem[];

  addItem: (product: IProduct, quantity?: number) => void;
  removeItem: (productId: number) => void;
  clearCart: () => void;

  increaseQuantity: (productId: number) => void;
  decreaseQuantity: (productId: number) => void;

  getTotalItems: () => number;
  getTotalPrice: () => number;
}

export const useCartStore = create<ICartState>()(
  persist(
    (set, get) => ({
      items: [],

      addItem: (product, quantity = 1) => {
        const items = get().items;
        const existing = items.find((i) => i.product.id === product.id);

        if (existing) {
          set({
            items: items.map((i) =>
              i.product.id === product.id ? { ...i, quantity: i.quantity + quantity } : i
            )
          });
        } else {
          set({
            items: [...items, { product, quantity }]
          });
        }
      },

      removeItem: (productId) =>
        set({
          items: get().items.filter((i) => i.product.id !== productId)
        }),

      clearCart: () => set({ items: [] }),

      increaseQuantity: (productId) =>
        set({
          items: get().items.map((i) =>
            i.product.id === productId ? { ...i, quantity: i.quantity + 1 } : i
          )
        }),

      decreaseQuantity: (productId) =>
        set({
          items: get()
            .items.map((i) => (i.product.id === productId ? { ...i, quantity: i.quantity - 1 } : i))
            .filter((i) => i.quantity > 0)
        }),

      getTotalItems: () => get().items.reduce((sum, item) => sum + item.quantity, 0),

      getTotalPrice: () =>
        get().items.reduce((sum, item) => sum + item.product.price * item.quantity, 0)
    }),
    {
      name: 'cart-storage'
    }
  )
);
