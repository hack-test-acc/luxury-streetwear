import { create } from 'zustand';
import { CartItem, Product } from '@/types';

interface CartStore {
  items: CartItem[];
  addItem: (product: Product, quantity: number, size: string, color: string) => void;
  removeItem: (productId: string, size: string, color: string) => void;
  updateQuantity: (productId: string, size: string, color: string, quantity: number) => void;
  clearCart: () => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
}

export const useCartStore = create<CartStore>((set, get) => ({
  items: [],

  addItem: (product, quantity, size, color) =>
    set((state) => {
      const existingItem = state.items.find(
        (item) =>
          item.productId === product.id &&
          item.size === size &&
          item.color === color
      );

      if (existingItem) {
        return {
          items: state.items.map((item) =>
            item.productId === product.id &&
            item.size === size &&
            item.color === color
              ? { ...item, quantity: item.quantity + quantity }
              : item
          ),
        };
      }

      return {
        items: [
          ...state.items,
          {
            productId: product.id,
            product,
            quantity,
            size,
            color,
          },
        ],
      };
    }),

  removeItem: (productId, size, color) =>
    set((state) => ({
      items: state.items.filter(
        (item) =>
          !(
            item.productId === productId &&
            item.size === size &&
            item.color === color
          )
      ),
    })),

  updateQuantity: (productId, size, color, quantity) =>
    set((state) => ({
      items: state.items.map((item) =>
        item.productId === productId &&
        item.size === size &&
        item.color === color
          ? { ...item, quantity: Math.max(0, quantity) }
          : item
      ),
    })),

  clearCart: () => set({ items: [] }),

  getTotalItems: () => {
    return get().items.reduce((total, item) => total + item.quantity, 0);
  },

  getTotalPrice: () => {
    return get().items.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0
    );
  },
}));
