import { useWishlistStore } from '@/store/wishlist';

export const useWishlist = () => {
  const { items, addItem, removeItem, toggleItem, isInWishlist, clearWishlist } =
    useWishlistStore();

  return {
    items,
    addItem,
    removeItem,
    toggleItem,
    isInWishlist,
    clearWishlist,
    count: items.length,
  };
};
