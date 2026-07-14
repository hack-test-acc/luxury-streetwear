// Product Types
export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  originalPrice?: number;
  images: string[];
  category: string;
  sizes: string[];
  colors: string[];
  material: string;
  materialOrigin: string;
  care: string[];
  inStock: boolean;
  rating: number;
  reviews: Review[];
  sku: string;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  comment: string;
  date: string;
  verified: boolean;
}

// Cart Types
export interface CartItem {
  productId: string;
  product: Product;
  quantity: number;
  size: string;
  color: string;
}

// Order Types
export interface Order {
  id: string;
  items: CartItem[];
  total: number;
  status: 'pending' | 'confirmed' | 'shipped' | 'delivered';
  createdAt: string;
  shippingAddress: Address;
}

export interface Address {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  street: string;
  city: string;
  country: string;
  postalCode: string;
}

// Collection Types
export interface Collection {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  products: Product[];
}

// Journal Types
export interface Article {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  image: string;
  category: 'fabric' | 'design' | 'culture' | 'sustainability' | 'behind-the-scenes';
  readTime: number;
}

// Wishlist Types
export interface WishlistItem {
  productId: string;
  addedAt: string;
}

// User Types
export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  createdAt: string;
}
