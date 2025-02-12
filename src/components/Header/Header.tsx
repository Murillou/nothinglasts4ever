import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="flex items-center justify-between">
        <div className="text-xl font-bold">
          <a href="/">nothinglasts4ever</a>
        </div>

        <nav className="hidden lg:flex space-x-6">
          <a href="#home" className="hover:text-gray-400">
            Design 1
          </a>
          <a href="#about" className="hover:text-gray-400">
            Design 2
          </a>
          <a href="#services" className="hover:text-gray-400">
            Design 3
          </a>
          <a href="#portfolio" className="hover:text-gray-400">
            Design 4
          </a>
          <a href="#blog" className="hover:text-gray-400">
            About me
          </a>
          <a href="#contact" className="hover:text-gray-400">
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

      {isMenuOpen && (
        <nav className="lg:hidden mt-4 space-y-4">
          <a href="#home" className="block hover:text-gray-400">
            Home
          </a>
          <a href="#about" className="block hover:text-gray-400">
            About
          </a>
          <a href="#services" className="block hover:text-gray-400">
            Services
          </a>
          <a href="#portfolio" className="block hover:text-gray-400">
            Portfolio
          </a>
          <a href="#blog" className="block hover:text-gray-400">
            Blog
          </a>
          <a href="#contact" className="block hover:text-gray-400">
            Contact
          </a>
        </nav>
      )}
    </header>
  );
}
