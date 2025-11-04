import React from 'react';
import { AnimatePresence, LayoutGroup, motion } from 'framer-motion';
import ProductCard from './ProductCard';

const ProductGrid = ({ products }) => {
  return (
    <LayoutGroup>
      <motion.div layout className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence>
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </AnimatePresence>
      </motion.div>
    </LayoutGroup>
  );
};

export default ProductGrid;
