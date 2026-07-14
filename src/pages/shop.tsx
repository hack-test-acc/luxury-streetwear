import Head from 'next/head';
import { Navigation, Footer } from '@/components';
import { motion } from 'framer-motion';
import { staggerContainerVariants, slideUpVariants } from '@/lib/animations';

const mockProducts = [
  {
    id: '1',
    name: 'Oversized Organic Tee',
    slug: 'oversized-organic-tee',
    price: 79,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop',
  },
  {
    id: '2',
    name: 'Heavy Cotton Hoodie',
    slug: 'heavy-cotton-hoodie',
    price: 159,
    image: 'https://images.unsplash.com/photo-1556821552-7f41c5d440db?w=500&h=500&fit=crop',
  },
  {
    id: '3',
    name: 'Cargo Pants',
    slug: 'cargo-pants',
    price: 189,
    image: 'https://images.unsplash.com/photo-1542272604-787c62d465d1?w=500&h=500&fit=crop',
  },
  {
    id: '4',
    name: 'Minimal Canvas Bag',
    slug: 'minimal-canvas-bag',
    price: 129,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop',
  },
];

export default function Shop() {
  return (
    <>
      <Head>
        <title>Shop - Essence</title>
        <meta name="description" content="Shop our premium streetwear collection" />
      </Head>

      <Navigation />
      
      <main className="pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-black-dark mb-4">Shop</h1>
            <p className="text-lg text-neutral-dark">Discover our complete collection of premium essentials</p>
          </motion.div>

          {/* Products Grid */}
          <motion.div
            variants={staggerContainerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
          >
            {mockProducts.map((product) => (
              <motion.div key={product.id} variants={slideUpVariants}>
                <div className="aspect-square rounded-sm overflow-hidden mb-4 bg-neutral-light">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-base font-medium text-black-dark mb-2">{product.name}</h3>
                <p className="text-lg font-semibold text-black-dark">${product.price}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </main>

      <Footer />
    </>
  );
}
