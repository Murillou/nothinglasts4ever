import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { List, X } from 'phosphor-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      startEvent: 'DOMContentLoaded',
      initClassName: 'aos-init',
      duration: 400,
      easing: 'ease',
    });
  }, []);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <header
      data-aos="fade-in"
      className="bg-transparent max-w-2xl md:max-w-4xl lg:max-w-7xl mx-auto text-[#e0e0e0] p-4"
    >
      <div
        className={`flex items-center justify-between ${
          isMenuOpen ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <div className="text-xl font-bold">
          <Link href="/">nothinglasts4ever</Link>
        </div>

        <nav className="hidden lg:flex space-x-6">
          <Link href={'/albumartwork'} className="hover:text-gray-400">
            Album Artwork
          </Link>

          <Link href={'/personalwork'} className="hover:text-gray-400">
            Personal Work
          </Link>

          <Link href={'/merchandise'} className="hover:text-gray-400">
            Merchandise
          </Link>

          <Link href={'/aboutme'} className="hover:text-gray-400">
            About me
          </Link>

          <Link href={'/contact'} className="hover:text-gray-400">
            Contact
          </Link>
        </nav>

        <button
          onClick={toggleMenu}
          className="lg:hidden text-2xl focus:outline-none"
        >
          <List />
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col items-center lg:hidden space-y-20 top-0 right-0 fixed inset-0 z-[200] min-h-full bg-[#1e1e1e] "
          >
            <button
              data-testid="close-button"
              className="absolute top-5 right-5"
              onClick={toggleMenu}
            >
              <X size={20} />
            </button>

            <Link
              href={'/albumartwork'}
              onClick={toggleMenu}
              className="block hover:text-gray-400"
            >
              Album Artwork
            </Link>

            <Link
              href={'/personalwork'}
              className="block hover:text-gray-400"
              onClick={toggleMenu}
            >
              Personal Work
            </Link>

            <Link
              href={'/merchandise'}
              className="block hover:text-gray-400"
              onClick={toggleMenu}
            >
              Merchandise
            </Link>

            <Link
              href={'/aboutme'}
              className="block hover:text-gray-400"
              onClick={toggleMenu}
            >
              About me
            </Link>

            <Link
              href={'/contact'}
              className="block hover:text-gray-400"
              onClick={toggleMenu}
            >
              Contact
            </Link>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
