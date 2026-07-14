'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { Product } from '@/types';
import { hoverScaleVariants } from '@/lib/animations';
import { useWishlistStore } from '@/store/wishlist';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { toggleItem, isInWishlist } = useWishlistStore();
  const inWishlist = isInWishlist(product.id);

  return (
    <Link href={`/products/${product.slug}`}>
      <motion.div
        variants={hoverScaleVariants}
        initial="initial"
        whileHover="hover"
        className="group cursor-pointer"
      >
        <div className="relative overflow-hidden bg-neutral-light mb-4 aspect-square">
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
          />
          <button
            onClick={(e) => {
              e.preventDefault();
              toggleItem(product.id);
            }}
            className="absolute top-4 right-4 bg-cream rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <Heart
              size={20}
              className={inWishlist ? 'fill-sage stroke-sage' : 'stroke-black-dark'}
            />
          </button>
        </div>
        <h3 className="text-base font-medium text-black-dark mb-2">{product.name}</h3>
        <p className="text-sm text-neutral-dark mb-3">{product.material}</p>
        <div className="flex items-center gap-2">
          <span className="text-lg font-semibold text-black-dark">${product.price}</span>
          {product.originalPrice && (
            <span className="text-sm line-through text-neutral-dark">${product.originalPrice}</span>
          )}
        </div>
        {product.rating && (
          <div className="flex items-center gap-1 mt-2">
            <span className="text-sm text-sage">★ {product.rating.toFixed(1)}</span>
            <span className="text-xs text-neutral-dark">({product.reviews?.length || 0})</span>
          </div>
        )}
      </motion.div>
    </Link>
  );
};
