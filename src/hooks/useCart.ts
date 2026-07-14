import { useCartStore } from '@/store/cart';

export const useCart = () => {
  const {
    items,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    getTotalItems,
    getTotalPrice,
  } = useCartStore();

  return {
    items,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    totalItems: getTotalItems(),
    totalPrice: getTotalPrice(),
  };
};
