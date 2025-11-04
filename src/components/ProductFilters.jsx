import React from 'react';

const tabs = [
  { key: 'all', label: 'All' },
  { key: 'in', label: 'In Stock' },
  { key: 'out', label: 'Out of Stock' },
];

const ProductFilters = ({ filter, setFilter, sort, setSort }) => {
  return (
    <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
      <div className="flex items-center gap-2 rounded-lg bg-white p-1 ring-1 ring-black/10">
        {tabs.map((t) => (
          <button
            key={t.key}
            onClick={() => setFilter(t.key)}
            className={`rounded-md px-4 py-2 text-sm font-medium transition ${
              filter === t.key
                ? 'bg-gray-900 text-white'
                : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className="flex items-center gap-2 text-sm">
        <span className="text-gray-600">Sort by</span>
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="rounded-md border border-black/10 bg-white px-3 py-2 text-gray-900 focus:outline-none"
        >
          <option value="featured">Featured</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
        </select>
      </div>
    </div>
  );
};

export default ProductFilters;
