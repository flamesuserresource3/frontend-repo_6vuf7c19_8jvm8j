import React from 'react';

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-black/90">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-8 text-center sm:flex-row">
        <p className="text-sm text-white/60">© {new Date().getFullYear()} Ethereal Stock</p>
        <nav className="flex items-center gap-6 text-sm text-white/60">
          <a href="#products" className="hover:text-white">Products</a>
          <a href="#about" className="hover:text-white">About</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
