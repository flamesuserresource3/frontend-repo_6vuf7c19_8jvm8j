import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-[70vh] w-full overflow-hidden bg-black sm:h-[78vh]" id="hero">
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
      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-5 text-center sm:px-6">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/80 backdrop-blur-sm">
          <Rocket className="h-3.5 w-3.5 text-cyan-400" />
          Premium Hoodies
        </div>
        <h1 className="font-geist text-[32px] font-semibold leading-tight text-white drop-shadow-[0_0_30px_rgba(34,211,238,0.35)] sm:text-5xl md:text-6xl">
          Ethereal Stock
        </h1>
        {/* Removed subtitle under the title for a cleaner hero */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3 sm:mt-8">
          <a
            href="#products"
            className="rounded-lg bg-cyan-500/90 px-5 py-3 text-sm font-medium text-black shadow-[0_0_25px_rgba(34,211,238,0.55)] transition hover:bg-cyan-400 hover:shadow-[0_0_35px_rgba(34,211,238,0.75)]"
          >
            Explore Hoodies
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
