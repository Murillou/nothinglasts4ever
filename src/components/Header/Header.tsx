import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className=" bg-transparent max-w-2xl md:max-w-4xl lg:max-w-7xl mx-auto text-[#e0e0e0] p-4">
      <div className="flex items-center justify-between">
        <div className="text-xl font-bold">
          <a href="/">nothinglasts4ever</a>
        </div>

        <nav className="hidden lg:flex space-x-6">
          <Link href={'/albumartwork'} className="hover:text-gray-400">
            Album Artwork
          </Link>

          <a href="" className="hover:text-gray-400">
            Personal Work
          </a>

          <a href="" className="hover:text-gray-400">
            Merchandise
          </a>

          <a href="" className="hover:text-gray-400">
            About me
          </a>
          <a href={'/contact'} className="hover:text-gray-400">
            Contact
          </a>
        </nav>

        <button
          onClick={toggleMenu}
          className="lg:hidden text-2xl focus:outline-none"
        >
          {isMenuOpen ? '×' : '☰'}
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col justify-center items-center lg:hidden mt-12 space-y-20"
          >
            <Link href={'/albumartwork'} className="block hover:text-gray-400">
              Album Artwork
            </Link>
            <a href="#services" className="block hover:text-gray-400">
              Personal Work
            </a>
            <a href="#portfolio" className="block hover:text-gray-400">
              Merchandise
            </a>
            <a href="#blog" className="block hover:text-gray-400">
              About me
            </a>
            <a href="#contact" className="block hover:text-gray-400">
              Contact
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
