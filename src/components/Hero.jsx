import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-[72vh] w-full overflow-hidden bg-white" id="hero">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/10 to-white/85" />
      </div>

      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 text-center">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/80 px-3 py-1 text-xs font-medium text-gray-700 backdrop-blur-sm">
          <Rocket className="h-3.5 w-3.5 text-rose-500" />
          Modern Product Showcase
        </div>
        <h1 className="font-geist text-4xl font-semibold leading-tight text-gray-900 sm:text-5xl md:text-6xl">
          Discover minimalist essentials
        </h1>
        <p className="mt-4 max-w-2xl text-base text-gray-600 sm:text-lg">
          Curated items with real-time stock status. Smooth transitions as you browse.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#products"
            className="rounded-lg bg-gray-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-gray-800"
          >
            Explore Products
          </a>
          <a
            href="#about"
            className="rounded-lg bg-white/80 px-5 py-3 text-sm font-medium text-gray-900 ring-1 ring-black/10 backdrop-blur-sm transition hover:bg-white"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
