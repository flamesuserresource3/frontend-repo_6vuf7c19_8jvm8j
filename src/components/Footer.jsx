import React from 'react';

const Footer = () => {
  return (
    <footer className="border-t border-black/10 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-8 text-center sm:flex-row">
        <p className="text-sm text-gray-600">© {new Date().getFullYear()} Minimal Grid Co.</p>
        <nav className="flex items-center gap-6 text-sm text-gray-600">
          <a href="#products" className="hover:text-gray-900">Products</a>
          <a href="#about" className="hover:text-gray-900">About</a>
          <a href="#contact" className="hover:text-gray-900">Contact</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
