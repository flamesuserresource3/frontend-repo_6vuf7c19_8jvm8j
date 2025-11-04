import React, { useMemo, useState } from 'react';
import Hero from './components/Hero';
import ProductFilters from './components/ProductFilters';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';

const initialProducts = [
  {
    id: 'p-1',
    name: 'Mono Wireless Headphones',
    category: 'Audio',
    price: 129.0,
    inStock: true,
    image: 'https://images.unsplash.com/photo-1704440278730-b420f5892700?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxNb25vJTIwV2lyZWxlc3MlMjBIZWFkcGhvbmVzfGVufDB8MHx8fDE3NjIyMzc4ODh8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
  {
    id: 'p-2',
    name: 'Aero Smartwatch',
    category: 'Wearables',
    price: 199.0,
    inStock: false,
    image: 'https://images.unsplash.com/photo-1662220727289-27d6b2f10a82?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxBZXJvJTIwU21hcnR3YXRjaHxlbnwwfDB8fHwxNzYyMjM3ODg4fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
  {
    id: 'p-3',
    name: 'Slate Mechanical Keyboard',
    category: 'Accessories',
    price: 159.0,
    inStock: true,
    image: 'https://images.unsplash.com/photo-1635663283406-093c21a76d3b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxTbGF0ZSUyME1lY2hhbmljYWwlMjBLZXlib2FyZHxlbnwwfDB8fHwxNzYyMjM3ODg5fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
  {
    id: 'p-4',
    name: 'Nimbus Desk Lamp',
    category: 'Home',
    price: 89.0,
    inStock: true,
    image: 'https://images.unsplash.com/photo-1614447912052-0db13d71b82e?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxOaW1idXMlMjBEZXNrJTIwTGFtcHxlbnwwfDB8fHwxNzYyMjM3ODg5fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
  {
    id: 'p-5',
    name: 'Peak Trail Backpack',
    category: 'Outdoors',
    price: 139.0,
    inStock: false,
    image: 'https://images.unsplash.com/photo-1616518178264-6b3489180867?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxQZWFrJTIwVHJhaWwlMjBCYWNrcGFja3xlbnwwfDB8fHwxNzYyMjM3ODkwfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
  {
    id: 'p-6',
    name: 'Aura Bluetooth Speaker',
    category: 'Audio',
    price: 79.0,
    inStock: true,
    image: 'https://images.unsplash.com/photo-1643385958950-8f0b8852171a?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxBdXJhJTIwQmx1ZXRvb3RoJTIwU3BlYWtlcnxlbnwwfDB8fHwxNzYyMjM3ODkwfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
  {
    id: 'p-7',
    name: 'Flux Charging Pad',
    category: 'Accessories',
    price: 39.0,
    inStock: true,
    image: 'https://images.unsplash.com/photo-1746291644839-0f5b4d88ffd0?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxGbHV4JTIwQ2hhcmdpbmclMjBQYWR8ZW58MHwwfHx8MTc2MjIzNzg5MXww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
  {
    id: 'p-8',
    name: 'Breeze Air Purifier',
    category: 'Home',
    price: 229.0,
    inStock: false,
    image: 'https://images.unsplash.com/photo-1756575433595-c2f87d10e5f4?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxCcmVlemUlMjBBaXIlMjBQdXJpZmllcnxlbnwwfDB8fHwxNzYyMjM3ODkyfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
  {
    id: 'p-9',
    name: 'Orbit Fitness Tracker',
    category: 'Wearables',
    price: 99.0,
    inStock: true,
    image: 'https://images.unsplash.com/photo-1671644315465-08aba45bc314?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxPcmJpdCUyMEZpdG5lc3MlMjBUcmFja2VyfGVufDB8MHx8fDE3NjIyMzc4OTJ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
];

function App() {
  const [filter, setFilter] = useState('all'); // all | in | out
  const [sort, setSort] = useState('featured'); // featured | price-asc | price-desc

  const visibleProducts = useMemo(() => {
    let arr = [...initialProducts];

    if (filter === 'in') arr = arr.filter((p) => p.inStock);
    if (filter === 'out') arr = arr.filter((p) => !p.inStock);

    if (sort === 'price-asc') arr.sort((a, b) => a.price - b.price);
    if (sort === 'price-desc') arr.sort((a, b) => b.price - a.price);

    return arr;
  }, [filter, sort]);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Hero />

      <main id="products" className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <h2 className="font-geist text-2xl font-semibold sm:text-3xl">Products</h2>
            <p className="mt-1 text-sm text-gray-600">
              Browse our latest arrivals. Stock status updates in real time.
            </p>
          </div>
        </div>

        <ProductFilters filter={filter} setFilter={setFilter} sort={sort} setSort={setSort} />

        <div className="mt-8">
          <ProductGrid products={visibleProducts} />
        </div>
      </main>

      <section id="about" className="bg-gray-50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="mx-auto max-w-3xl text-center">
            <h3 className="font-geist text-2xl font-semibold">Designed for modern shopping</h3>
            <p className="mt-3 text-gray-600">
              Clean aesthetics, clear stock status, and delightful motion. As you filter,
              products smoothly reflow with subtle animations for a premium experience.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;
