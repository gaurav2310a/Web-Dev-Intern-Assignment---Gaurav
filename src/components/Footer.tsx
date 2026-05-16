'use client';

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-navy text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              IIM <span className="text-gradient">Sirmaur</span>
            </h3>
            <p className="text-gray-300 mb-4">
              India's First AI-Native MBA for Working Professionals
            </p>
            <p className="text-gray-400 text-sm">
              Empowering professionals with cutting-edge business education integrated with artificial intelligence.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-yellow-500">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('features')}
                  className="text-gray-300 hover:text-yellow-500 transition-colors"
                >
                  Program Features
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('eligibility')}
                  className="text-gray-300 hover:text-yellow-500 transition-colors"
                >
                  Eligibility
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('apply')}
                  className="text-gray-300 hover:text-yellow-500 transition-colors"
                >
                  Apply Now
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-yellow-500">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-yellow-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+919876543210" className="text-gray-300 hover:text-yellow-500 transition-colors">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-yellow-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:admissions@iimsirmaur.ac.in" className="text-gray-300 hover:text-yellow-500 transition-colors">
                  admissions@iimsirmaur.ac.in
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2026 IIM Sirmaur. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
