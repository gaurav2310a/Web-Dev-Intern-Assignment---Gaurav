'use client';

import { useEffect, useState } from 'react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-navy overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gold rounded-full filter blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gold rounded-full filter blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div
            className={`transform transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <div className="inline-block mb-4">
              <span className="bg-gold/20 text-gold px-4 py-2 rounded-full text-sm font-semibold">
                India's First AI-Native MBA
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              India's First AI-Native MBA for{' '}
              <span className="text-gradient">Working Professionals</span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-300 mb-8 leading-relaxed">
              Earn an MBA degree from IIM Sirmaur without quitting your job.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button
                onClick={() => scrollToSection('apply')}
                className="bg-gradient-gold text-white px-8 py-4 rounded-full font-semibold text-lg hover:opacity-90 transition-all transform hover:scale-105 shadow-lg"
              >
                Download Brochure
              </button>
              <button
                onClick={() => scrollToSection('apply')}
                className="border-2 border-gold text-yellow-500 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gold hover:text-white transition-all"
              >
                Apply Now
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-yellow-500">24</div>
                <div className="text-gray-400 text-sm">Months Duration</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-yellow-500">100%</div>
                <div className="text-gray-400 text-sm">Online Live</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-yellow-500">IIM</div>
                <div className="text-gray-400 text-sm">Alumni Status</div>
              </div>
            </div>
          </div>

          <div
            className={`transform transition-all duration-1000 delay-300 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Program Highlights
                  </h3>
                  <p className="text-gray-300">Designed for the future of business</p>
                </div>
                <ul className="space-y-4">
                  {[
                    'AI-Powered Curriculum',
                    'Weekend Live Classes',
                    'Campus Immersions',
                    'Industry Projects',
                    'Executive Networking',
                    'Career Support'
                  ].map((item, index) => (
                    <li key={index} className="flex items-center text-gray-200">
                      <svg
                        className="w-5 h-5 text-yellow mr-3 flex-shrink-0"
                        fill="yellow"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
