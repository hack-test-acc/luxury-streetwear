'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Handshake, Package, Target } from 'lucide-react';
import { SUSTAINABILITY_FEATURES } from '@/lib/constants';
import { staggerContainerVariants, slideUpVariants } from '@/lib/animations';

const iconMap: Record<string, React.ReactNode> = {
  Leaf: <Leaf size={32} />,
  Handshake: <Handshake size={32} />,
  Package: <Package size={32} />,
  Target: <Target size={32} />,
};

export const SustainabilitySection: React.FC = () => {
  return (
    <section className="py-20 bg-cream border-t border-neutral-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black-dark mb-4">Sustainability</h2>
          <p className="text-lg text-neutral-dark max-w-2xl mx-auto">
            Every piece is crafted with intention and care for our planet
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {SUSTAINABILITY_FEATURES.map((feature) => (
            <motion.div
              key={feature.id}
              variants={slideUpVariants}
              className="text-center"
            >
              <div className="mb-4 text-sage flex justify-center">
                {iconMap[feature.icon] || <Leaf size={32} />}
              </div>
              <h3 className="text-lg font-semibold text-black-dark mb-2">{feature.title}</h3>
              <p className="text-sm text-neutral-dark leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
