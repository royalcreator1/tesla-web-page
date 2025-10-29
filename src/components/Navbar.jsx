import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Modal from './Modal';
import BookTestDriveForm from './BookTestDriveForm';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isBookDriveModalOpen, setIsBookDriveModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-effect py-3' : 'py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              YANTRA
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#models" className="text-white hover:text-gray-300 transition-colors duration-200 font-medium">
              Models
            </a>
            <a href="#services" className="text-white hover:text-gray-300 transition-colors duration-200 font-medium">
              Services
            </a>
            <a href="#about" className="text-white hover:text-gray-300 transition-colors duration-200 font-medium">
              About
            </a>
            <button onClick={() => setIsBookDriveModalOpen(true)} className="btn-primary">
              Book Test Drive
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-4 pb-4 space-y-4 glass-effect rounded-lg p-6"
          >
            <a href="#models" className="block text-white hover:text-gray-300 transition-colors duration-200" onClick={() => setIsMobileMenuOpen(false)}>
              Models
            </a>
            <a href="#services" className="block text-white hover:text-gray-300 transition-colors duration-200" onClick={() => setIsMobileMenuOpen(false)}>
              Services
            </a>
            <a href="#about" className="block text-white hover:text-gray-300 transition-colors duration-200" onClick={() => setIsMobileMenuOpen(false)}>
              About
            </a>
            <button onClick={() => { setIsBookDriveModalOpen(true); setIsMobileMenuOpen(false); }} className="btn-primary w-full mt-4">
              Book Test Drive
            </button>
          </motion.div>
        )}
      </div>

      {/* Book Test Drive Modal */}
      <Modal
        isOpen={isBookDriveModalOpen}
        onClose={() => setIsBookDriveModalOpen(false)}
        title="Book a Test Drive"
      >
        <BookTestDriveForm />
      </Modal>
    </motion.nav>
  );
};

export default Navbar;

