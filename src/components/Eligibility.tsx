'use client';

export default function Eligibility() {
  return (
    <section id="eligibility" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mb-4">
            Eligibility & <span className="text-gold">Important Dates</span>
          </h2>
          <p className="text-xl text-navy/70 max-w-3xl mx-auto">
            Check if you qualify and mark your calendar for important deadlines.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="bg-navy rounded-3xl p-8 text-white shadow-lg">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gold">Eligibility Criteria</h3>
            </div>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-8 h-8 flex items-center justify-center mr-4 mt-1">
                  <span className="text-white font-bold">1</span>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Bachelor's Degree</h4>
                  <p className="text-white/80">Minimum 50% aggregate marks in graduation from a recognized university.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-8 h-8 flex items-center justify-center mr-4 mt-1">
                  <span className="text-white font-bold">2</span>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Work Experience</h4>
                  <p className="text-white/80">Minimum 2 years of full-time work experience after graduation.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white border border-navy border-opacity-10 rounded-3xl p-8 shadow-lg">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gold">Important Information</h3>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 border border-navy border-opacity-10">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-navy font-medium">Application Deadline</span>
                  <span className="bg-gold text-navy px-3 py-1 rounded-full text-sm font-semibold">
                    Limited Seats
                  </span>
                </div>
                <p className="text-2xl font-bold text-navy">31st July 2026</p>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-navy border-opacity-10">
                <span className="text-navy font-medium block mb-2">Contact for Queries</span>
                <a
                  href="tel:+919876543210"
                  className="text-2xl font-bold text-gold"
                >
                  +91 98765 43210
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
