import Head from 'next/head';
import { Navigation, Footer } from '@/components';
import { motion } from 'framer-motion';
import { slideUpVariants } from '@/lib/animations';

export default function About() {
  return (
    <>
      <Head>
        <title>About - Essence</title>
        <meta name="description" content="Learn about Essence and our commitment to sustainability" />
      </Head>

      <Navigation />
      
      <main className="pt-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-black-dark mb-4">About Essence</h1>
            <p className="text-xl text-neutral-dark">Premium streetwear designed to last</p>
          </motion.div>

          {/* Content Sections */}
          <div className="space-y-16">
            <motion.section
              variants={slideUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-black-dark mb-6">Our Philosophy</h2>
              <p className="text-lg text-neutral-dark leading-relaxed mb-4">
                Essence is born from a simple belief: quality over quantity. We craft premium streetwear that transcends trends and stands the test of time.
              </p>
              <p className="text-lg text-neutral-dark leading-relaxed">
                Every piece is thoughtfully designed with organic materials and responsible production practices. We believe in creating clothing that feels good to wear and good to own.
              </p>
            </motion.section>

            <motion.section
              variants={slideUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold text-black-dark mb-6">Our Commitment</h2>
              <ul className="space-y-4 text-lg text-neutral-dark leading-relaxed">
                <li>✓ GOTS-certified organic cotton</li>
                <li>✓ Fair wages and safe working conditions</li>
                <li>✓ Minimal, recyclable packaging</li>
                <li>✓ Small batch production</li>
                <li>✓ Transparent supply chain</li>
              </ul>
            </motion.section>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
