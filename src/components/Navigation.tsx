'use client';

import { useState, useEffect } from 'react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView();
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 ${
        isScrolled
          ? 'bg-navy shadow-lg py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <h1 className="text-xl sm:text-2xl font-bold text-white">
              IIM <span className="text-gold">Sirmaur</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('features')}
              className="text-gold hover:text-gold font-medium"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection('eligibility')}
              className="text-gold hover:text-gold font-medium"
            >
              Eligibility
            </button>
            <button
              onClick={() => scrollToSection('apply')}
              className="bg-gold text-navy px-6 py-2 rounded-full font-semibold"
            >
              Apply Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-navy border-opacity-10">
            <div className="flex flex-col space-y-4 pt-4">
              <button
                onClick={() => scrollToSection('features')}
                className="text-white hover:text-gold font-medium text-left"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection('eligibility')}
                className="text-white hover:text-gold font-medium text-left"
              >
                Eligibility
              </button>
              <button
                onClick={() => scrollToSection('apply')}
                className="bg-gold text-navy px-6 py-2 rounded-full font-semibold text-center"
              >
                Apply Now
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
