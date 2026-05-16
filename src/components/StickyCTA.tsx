'use client';

import { useState, useEffect } from 'react';

export default function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky CTA after scrolling past hero section
      const heroSection = document.querySelector('section');
      const footer = document.querySelector('footer');
      
      if (heroSection && footer) {
        const heroBottom = heroSection.getBoundingClientRect().bottom;
        const footerTop = footer.getBoundingClientRect().top;
        
        // Hide if footer is in view (within 100px of viewport bottom)
        const isFooterVisible = footerTop < window.innerHeight + 100;
        
        // Show after hero is scrolled past, but hide when footer is visible
        setIsVisible(heroBottom < 0 && !isFooterVisible);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white shadow-2xl border-t border-gray-200 py-4 px-4">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-center sm:text-left">
          <p className="text-navy font-semibold">
            Application Deadline: <span className="text-gold">31st July 2026</span>
          </p>
          <p className="text-gray-600 text-sm">Limited seats available</p>
        </div>
        <div className="flex gap-3">
          <button
            onClick={() => scrollToSection('apply')}
            className="bg-gradient-gold text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity whitespace-nowrap"
          >
            Apply Now
          </button>
          <a
            href="tel:+919876543210"
            className="border-2 border-navy text-navy px-6 py-3 rounded-full font-semibold hover:bg-navy hover:text-white transition-all whitespace-nowrap"
          >
            Call Us
          </a>
        </div>
      </div>
    </div>
  );
}
