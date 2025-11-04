import React, { useEffect, useMemo, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ProductCard from './ProductCard';

const clamp = (num, min, max) => Math.min(Math.max(num, min), max);

const ProductSlider = ({ products }) => {
  const [index, setIndex] = useState(0);

  const visible = useMemo(() => {
    // show up to 5 around the center for smoothness
    const result = [];
    for (let offset = -2; offset <= 2; offset++) {
      const i = index + offset;
      if (i >= 0 && i < products.length) {
        result.push({ item: products[i], idx: i, offset });
      }
    }
    return result;
  }, [index, products]);

  const go = useCallback((dir) => {
    setIndex((prev) => clamp(prev + dir, 0, products.length - 1));
  }, [products.length]);

  const onKey = useCallback((e) => {
    if (e.key === 'ArrowRight') go(1);
    if (e.key === 'ArrowLeft') go(-1);
  }, [go]);

  useEffect(() => {
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onKey]);

  return (
    <section id="products" className="relative mx-auto w-full max-w-6xl px-6">
      <div className="mb-8 flex items-end justify-between">
        <div>
          <h2 className="font-geist text-2xl font-semibold text-white sm:text-3xl">Trending Picks</h2>
          <p className="mt-1 text-sm text-white/60">Slide to browse. Center item grows with a glow.</p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => go(-1)}
            className="rounded-lg bg-white/5 p-2 text-white ring-1 ring-white/10 transition hover:bg-white/10"
            aria-label="Previous"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={() => go(1)}
            className="rounded-lg bg-white/5 p-2 text-white ring-1 ring-white/10 transition hover:bg-white/10"
            aria-label="Next"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Slider track */}
      <div className="relative">
        <div className="pointer-events-none absolute inset-0 -z-[0] opacity-60 blur-3xl" aria-hidden>
          <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/20" />
        </div>

        <div className="flex items-stretch justify-center gap-6 overflow-hidden">
          <AnimatePresence initial={false}>
            {visible.map(({ item, idx, offset }) => {
              const distance = Math.abs(offset);
              const scale = 1 - distance * 0.1; // size change animation
              const zIndex = 10 - distance;
              const isActive = idx === index;

              return (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  style={{ zIndex }}
                  className="basis-[75%] sm:basis-[45%] md:basis-[32%]"
                >
                  <motion.div animate={{ scale }} transition={{ type: 'spring', stiffness: 300, damping: 30 }}>
                    <ProductCard product={item} isActive={isActive} onClick={() => setIndex(idx)} />
                  </motion.div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Progress dots */}
        <div className="mt-6 flex items-center justify-center gap-2">
          {products.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Go to ${i + 1}`}
              className={`h-2.5 w-2.5 rounded-full transition ${
                i === index ? 'bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.8)]' : 'bg-white/20 hover:bg-white/40'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSlider;
