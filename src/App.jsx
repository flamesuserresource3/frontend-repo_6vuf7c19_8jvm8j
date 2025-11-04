import React from 'react';
import Hero from './components/Hero';
import ProductSlider from './components/ProductSlider';
import Footer from './components/Footer';

const products = [
  {
    id: 'h-1',
    name: 'Shadow Zip Hoodie',
    category: 'Zip Hoodie',
    price: 79.0,
    inStock: true,
    image:
      'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 'h-2',
    name: 'Nimbus Pullover',
    category: 'Pullover',
    price: 69.0,
    inStock: true,
    image:
      'https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 'h-3',
    name: 'Eclipse Fleece Hoodie',
    category: 'Fleece',
    price: 89.0,
    inStock: false,
    image:
      'https://images.unsplash.com/photo-1520975682238-4e463b482f77?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 'h-4',
    name: 'Arctic Oversized Hoodie',
    category: 'Oversized',
    price: 84.0,
    inStock: true,
    image:
      'https://images.unsplash.com/photo-1516826957135-700dedea698c?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 'h-5',
    name: 'Cinder Crop Hoodie',
    category: 'Crop',
    price: 64.0,
    inStock: true,
    image:
      'https://images.unsplash.com/photo-1537832816519-689ad163238b?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 'h-6',
    name: 'Aurora Tech Hoodie',
    category: 'Tech Knit',
    price: 99.0,
    inStock: true,
    image:
      'https://images.unsplash.com/photo-1539874754764-5a96559165b3?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 'h-7',
    name: 'Coal Classic Hoodie',
    category: 'Classic',
    price: 59.0,
    inStock: true,
    image:
      'https://images.unsplash.com/photo-1548883354-7622d99b14e8?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 'h-8',
    name: 'Mist Lightweight Hoodie',
    category: 'Lightweight',
    price: 72.0,
    inStock: false,
    image:
      'https://images.unsplash.com/photo-1592875245564-0b7231b2a1fd?q=80&w=1600&auto=format&fit=crop',
  },
];

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Hero />

      {/* subtle particle-esque glow strip */}
      <div className="pointer-events-none h-px w-full bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />

      <main className="mx-auto max-w-none bg-black pb-16 pt-10 sm:pb-20 sm:pt-12">
        <ProductSlider products={products} />
      </main>

      <Footer />
    </div>
  );
}

export default App;
