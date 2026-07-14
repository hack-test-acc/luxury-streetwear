'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { COLLECTIONS } from '@/lib/constants';
import { staggerContainerVariants, slideUpVariants } from '@/lib/animations';

export const CollectionGrid: React.FC = () => {
  return (
    <section className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black-dark mb-4">Featured Collections</h2>
          <p className="text-lg text-neutral-dark max-w-2xl mx-auto">
            Explore our curated selection of premium streetwear essentials
          </p>
        </motion.div>

        {/* Collections Grid */}
        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {COLLECTIONS.map((collection) => (
            <motion.div key={collection.id} variants={slideUpVariants}>
              <Link href={`/collections/${collection.slug}`}>
                <div className="group cursor-pointer">
                  <div className="relative overflow-hidden bg-neutral-light mb-4 aspect-square">
                    <div className="absolute inset-0 bg-black-dark/40 group-hover:bg-black-dark/60 transition-colors duration-300 z-10" />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black-dark/40" />
                    <p className="absolute bottom-4 left-4 text-cream font-semibold text-lg z-20">
                      {collection.name}
                    </p>
                  </div>
                  <p className="text-sm text-neutral-dark">{collection.slug.replace('-', ' ')}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
