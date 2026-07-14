'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeInVariants, slideUpVariants } from '@/lib/animations';
import { Button } from './Button';

interface HeroProps {
  headline?: string;
  subheadline?: string;
  image?: string;
  cta?: string;
  ctaLink?: string;
}

export const Hero: React.FC<HeroProps> = ({
  headline = 'Designed to Last',
  subheadline = 'Premium streetwear crafted from organic materials',
  image = 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=1200&h=800&fit=crop',
  cta = 'Shop Collection',
  ctaLink = '/shop',
}) => {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-cream">
      <Image
        src={image}
        alt="Hero"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black-dark/30" />
      
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <motion.h1
          variants={fadeInVariants}
          initial="hidden"
          animate="visible"
          className="text-5xl md:text-7xl font-bold text-cream mb-4 max-w-4xl leading-tight"
        >
          {headline}
        </motion.h1>
        
        <motion.p
          variants={slideUpVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl text-neutral-light mb-8 max-w-2xl"
        >
          {subheadline}
        </motion.p>
        
        <motion.div
          variants={slideUpVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.4 }}
        >
          <Button
            size="lg"
            className="bg-cream text-black-dark hover:bg-neutral-light"
            onClick={() => window.location.href = ctaLink}
          >
            {cta}
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
