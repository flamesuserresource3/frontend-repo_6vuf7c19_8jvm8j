import React from 'react';
import { motion } from 'framer-motion';

const ProductCard = ({ product }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className="group relative overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm"
    >
      <div className="relative h-48 w-full overflow-hidden bg-gray-50">
        {/* Image */}
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Stock badge */}
        <div className="absolute left-3 top-3">
          <span
            className={`rounded-full px-2.5 py-1 text-xs font-medium ${
              product.inStock
                ? 'bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200'
                : 'bg-rose-50 text-rose-700 ring-1 ring-rose-200'
            }`}
          >
            {product.inStock ? 'In Stock' : 'Out of Stock'}
          </span>
        </div>
      </div>

      <div className="flex items-start justify-between gap-4 p-4">
        <div>
          <h3 className="text-base font-semibold text-gray-900">{product.name}</h3>
          <p className="mt-1 text-sm text-gray-600">{product.category}</p>
        </div>
        <div className="text-right">
          <div className="text-lg font-semibold text-gray-900">${product.price.toFixed(2)}</div>
          {!product.inStock && (
            <div className="text-xs text-rose-600">Restocking soon</div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
