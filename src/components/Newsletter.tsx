'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { slideUpVariants } from '@/lib/animations';
import { Button } from './Button';

export const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setMessage('Thank you for subscribing!');
      setEmail('');
      setIsLoading(false);
      setTimeout(() => setMessage(''), 3000);
    }, 1000);
  };

  return (
    <section className="py-20 bg-neutral-light">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-black-dark mb-4">
            Stay Updated
          </h2>
          <p className="text-neutral-dark mb-8">
            Get early access to new collections, exclusive offers, and behind-the-scenes stories.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 px-4 py-3 border border-neutral-dark rounded-sm bg-cream text-black-dark placeholder-neutral-dark focus:outline-none focus:ring-2 focus:ring-sage"
            />
            <Button
              type="submit"
              isLoading={isLoading}
              size="md"
              className="w-full sm:w-auto"
            >
              Subscribe
            </Button>
          </form>

          {message && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-4 text-sage font-medium"
            >
              {message}
            </motion.p>
          )}
        </motion.div>
      </div>
    </section>
  );
};
