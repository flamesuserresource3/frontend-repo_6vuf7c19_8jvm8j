import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-[78vh] w-full overflow-hidden bg-black" id="hero">
      {/* Spline background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/00xeECdZSAQfgZTz/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* subtle dark gradient to keep text legible; doesn't block interaction */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 text-center">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/80 backdrop-blur-sm">
          <Rocket className="h-3.5 w-3.5 text-cyan-400" />
          Futuristic Collection
        </div>
        <h1 className="font-geist text-4xl font-semibold leading-tight text-white drop-shadow-[0_0_30px_rgba(34,211,238,0.35)] sm:text-5xl md:text-6xl">
          Ethereal Stock
        </h1>
        <p className="mt-4 max-w-2xl text-base text-white/70 sm:text-lg">
          A sleek, dark experience with glowing detail and motion. Slide through picks and watch them morph in size.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#products"
            className="rounded-lg bg-cyan-500/90 px-5 py-3 text-sm font-medium text-black shadow-[0_0_25px_rgba(34,211,238,0.55)] transition hover:bg-cyan-400 hover:shadow-[0_0_35px_rgba(34,211,238,0.75)]"
          >
            Explore Products
          </a>
          <a
            href="#about"
            className="rounded-lg bg-white/5 px-5 py-3 text-sm font-medium text-white ring-1 ring-white/10 backdrop-blur-sm transition hover:bg-white/10"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
