'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Menu, X, Heart, ShoppingBag } from 'lucide-react';
import { NAVIGATION } from '@/lib/constants';
import { useCartStore } from '@/store/cart';
import { useWishlistStore } from '@/store/wishlist';

export const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const cartItems = useCartStore((state) => state.getTotalItems());
  const wishlistItems = useWishlistStore((state) => state.items.length);

  return (
    <nav className="fixed top-0 w-full bg-cream border-b border-neutral-light z-50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-black-dark tracking-wider">
            ESSENCE
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8 items-center">
            {NAVIGATION.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-black-dark hover:text-sage transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Icons */}
          <div className="flex items-center gap-4">
            <Link href="/wishlist" className="relative">
              <Heart size={20} className="text-black-dark" />
              {wishlistItems > 0 && (
                <span className="absolute -top-2 -right-2 w-5 h-5 bg-sage text-cream text-xs rounded-full flex items-center justify-center">
                  {wishlistItems}
                </span>
              )}
            </Link>
            <Link href="/cart" className="relative">
              <ShoppingBag size={20} className="text-black-dark" />
              {cartItems > 0 && (
                <span className="absolute -top-2 -right-2 w-5 h-5 bg-sage text-cream text-xs rounded-full flex items-center justify-center">
                  {cartItems}
                </span>
              )}
            </Link>

            {/* Mobile Menu */}
            <button
              className="md:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden border-t border-neutral-light"
          >
            <div className="px-4 py-4 space-y-4">
              {NAVIGATION.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block text-sm font-medium text-black-dark hover:text-sage"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};
