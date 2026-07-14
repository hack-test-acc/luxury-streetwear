import Head from 'next/head';
import { Hero, Navigation, Footer, CollectionGrid, SustainabilitySection, Newsletter } from '@/components';

export default function Home() {
  return (
    <>
      <Head>
        <title>Essence - Premium Streetwear</title>
        <meta name="description" content="Premium streetwear crafted from organic materials. Designed to last." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Navigation />
      
      <main className="pt-16">
        <Hero />
        <CollectionGrid />
        <SustainabilitySection />
        <Newsletter />
      </main>
      
      <Footer />
    </>
  );
}
