'use client';

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView();
    }
  };

  return (
    <section className="relative min-h-screen flex items-center bg-navy text-white">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-flex items-center bg-white text-navy px-4 py-2 rounded-full text-sm font-semibold mb-6">
              India's First AI-Native MBA
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              India's First AI-Native MBA for <span className="text-gold">Working Professionals</span>
            </h1>

            <p className="max-w-2xl text-lg sm:text-xl text-white/80 mb-10">
              Earn an MBA degree from IIM Sirmaur without quitting your job.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button
                onClick={() => scrollToSection('apply')}
                className="bg-gold text-navy px-8 py-4 rounded-full font-semibold text-lg"
              >
                Download Brochure
              </button>
              <button
                onClick={() => scrollToSection('apply')}
                className="bg-white text-navy px-8 py-4 rounded-full font-semibold text-lg border border-white"
              >
                Apply Now
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="rounded-3xl bg-white/10 p-6">
                <p className="text-3xl font-bold text-gold mb-2">24</p>
                <p className="text-sm text-white/80">Months Duration</p>
              </div>
              <div className="rounded-3xl bg-white/10 p-6">
                <p className="text-3xl font-bold text-gold mb-2">100%</p>
                <p className="text-sm text-white/80">Online Live</p>
              </div>
              <div className="rounded-3xl bg-white/10 p-6">
                <p className="text-3xl font-bold text-gold mb-2">IIM</p>
                <p className="text-sm text-white/80">Alumni Status</p>
              </div>
            </div>
          </div>

          <div className="bg-white text-navy rounded-3xl p-10 shadow-xl">
            <h3 className="text-2xl font-bold mb-4">Program Highlights</h3>
            <p className="text-base text-navy/70 mb-6">
              Designed for working professionals who want a premium, executive MBA experience.
            </p>
            <ul className="space-y-4">
              {[
                'AI-Powered Curriculum',
                'Weekend Live Classes',
                'Campus Immersions',
                'Industry Projects',
                'Executive Networking',
                'Career Support'
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="mt-1 text-gold">•</span>
                  <span className="text-navy">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
