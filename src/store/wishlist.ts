import { create } from 'zustand';

interface WishlistStore {
  items: string[];
  addItem: (productId: string) => void;
  removeItem: (productId: string) => void;
  toggleItem: (productId: string) => void;
  isInWishlist: (productId: string) => boolean;
  clearWishlist: () => void;
}

export const useWishlistStore = create<WishlistStore>((set, get) => ({
  items: [],

  addItem: (productId) =>
    set((state) => ({
      items: state.items.includes(productId)
        ? state.items
        : [...state.items, productId],
    })),

  removeItem: (productId) =>
    set((state) => ({
      items: state.items.filter((id) => id !== productId),
    })),

  toggleItem: (productId) => {
    const { isInWishlist } = get();
    if (isInWishlist(productId)) {
      get().removeItem(productId);
    } else {
      get().addItem(productId);
    }
  },

  isInWishlist: (productId) => get().items.includes(productId),

  clearWishlist: () => set({ items: [] }),
}));
