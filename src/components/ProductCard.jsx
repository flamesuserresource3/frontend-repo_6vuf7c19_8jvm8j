import React from 'react';
import { motion } from 'framer-motion';

const ProductCard = ({ product, isActive, onClick }) => {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      layout
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: isActive ? 1.05 : 0.9 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className={`group relative w-full overflow-hidden rounded-2xl border bg-gradient-to-b from-white/5 to-white/0 px-0 pb-0 pt-0 text-left shadow-[0_0_0_rgba(0,0,0,0)] backdrop-blur-sm ring-1 transition ${
        isActive
          ? 'ring-cyan-400/50 shadow-[0_0_35px_rgba(34,211,238,0.25)]'
          : 'ring-white/10 hover:ring-cyan-300/30 hover:shadow-[0_0_25px_rgba(34,211,238,0.15)]'
      }`}
    >
      <div className="relative h-64 w-full overflow-hidden bg-black">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover opacity-95 transition-transform duration-700 group-hover:scale-105"
        />
        {/* Glow vignette */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(transparent,rgba(0,0,0,0.6))]" />
        {/* Stock badge */}
        <div className="absolute left-3 top-3">
          <span
            className={`rounded-full px-2.5 py-1 text-xs font-medium backdrop-blur-sm ${
              product.inStock
                ? 'bg-emerald-400/15 text-emerald-300 ring-1 ring-emerald-300/30'
                : 'bg-rose-400/15 text-rose-300 ring-1 ring-rose-300/30'
            }`}
          >
            {product.inStock ? 'In Stock' : 'Out of Stock'}
          </span>
        </div>
      </div>

      <div className="flex items-start justify-between gap-4 p-4">
        <div>
          <h3 className="text-base font-semibold text-white">{product.name}</h3>
          <p className="mt-1 text-sm text-white/60">{product.category}</p>
        </div>
        <div className="text-right">
          <div className="text-lg font-semibold text-cyan-300">${product.price.toFixed(2)}</div>
          {!product.inStock && (
            <div className="text-xs text-rose-300">Restocking soon</div>
          )}
        </div>
      </div>
    </motion.button>
  );
};

export default ProductCard;
