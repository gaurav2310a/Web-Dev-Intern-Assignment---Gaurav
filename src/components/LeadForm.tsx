'use client';

import { useState } from 'react';

export default function LeadForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    designation: '',
    experience: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[6-9]\d{9}$/.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }

    if (!formData.designation.trim()) {
      newErrors.designation = 'Current designation is required';
    }

    if (!formData.experience) {
      newErrors.experience = 'Experience is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({
      name: '',
      email: '',
      phone: '',
      designation: '',
      experience: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  if (isSubmitted) {
    return (
      <section id="apply" className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 shadow-xl text-center border border-navy border-opacity-10">
            <div className="w-20 h-20 bg-gold rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-navy" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <path d="M9 12l2 2 4-4" />
              </svg>
            </div>
            <h3 className="text-3xl font-bold text-navy mb-4">Thank You!</h3>
            <p className="text-xl text-navy/70 mb-6">
              Your application has been submitted successfully. Our team will contact you shortly.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="bg-gold text-navy px-8 py-3 rounded-full font-semibold"
            >
              Submit Another Application
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="apply" className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mb-4">
            Apply <span className="text-gold">Now</span>
          </h2>
          <p className="text-xl text-navy/70">
            Take the first step towards your AI-powered MBA journey.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-8 shadow-xl border border-navy border-opacity-10">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-navy mb-2">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg border ${
                  errors.name ? 'border-gold' : 'border-navy border-opacity-10'
                } focus:ring-2 focus:ring-gold focus:border-transparent outline-none`}
                placeholder="Enter your full name"
                aria-invalid={errors.name ? 'true' : 'false'}
                aria-describedby={errors.name ? 'name-error' : undefined}
              />
              {errors.name && (
                <p id="name-error" className="text-gold text-sm mt-1" role="alert">
                  {errors.name}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-navy mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg border ${
                  errors.email ? 'border-gold' : 'border-navy border-opacity-10'
                } focus:ring-2 focus:ring-gold focus:border-transparent outline-none`}
                placeholder="Enter your email address"
                aria-invalid={errors.email ? 'true' : 'false'}
                aria-describedby={errors.email ? 'email-error' : undefined}
              />
              {errors.email && (
                <p id="email-error" className="text-gold text-sm mt-1" role="alert">
                  {errors.email}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-navy mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg border ${
                  errors.phone ? 'border-gold' : 'border-navy border-opacity-10'
                } focus:ring-2 focus:ring-gold focus:border-transparent outline-none`}
                placeholder="Enter your phone number"
                aria-invalid={errors.phone ? 'true' : 'false'}
                aria-describedby={errors.phone ? 'phone-error' : undefined}
              />
              {errors.phone && (
                <p id="phone-error" className="text-gold text-sm mt-1" role="alert">
                  {errors.phone}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="designation" className="block text-sm font-semibold text-navy mb-2">
                Current Designation *
              </label>
              <input
                type="text"
                id="designation"
                name="designation"
                value={formData.designation}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg border ${
                  errors.designation ? 'border-gold' : 'border-navy border-opacity-10'
                } focus:ring-2 focus:ring-gold focus:border-transparent outline-none`}
                placeholder="Enter your current designation"
                aria-invalid={errors.designation ? 'true' : 'false'}
                aria-describedby={errors.designation ? 'designation-error' : undefined}
              />
              {errors.designation && (
                <p id="designation-error" className="text-gold text-sm mt-1" role="alert">
                  {errors.designation}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="experience" className="block text-sm font-semibold text-navy mb-2">
                Work Experience *
              </label>
              <select
                id="experience"
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg border ${
                  errors.experience ? 'border-gold' : 'border-navy border-opacity-10'
                } focus:ring-2 focus:ring-gold focus:border-transparent outline-none bg-white`}
                aria-invalid={errors.experience ? 'true' : 'false'}
                aria-describedby={errors.experience ? 'experience-error' : undefined}
              >
                <option value="">Select your experience</option>
                <option value="2-3">2-3 years</option>
                <option value="3-5">3-5 years</option>
                <option value="5-7">5-7 years</option>
                <option value="7-10">7-10 years</option>
                <option value="10+">10+ years</option>
              </select>
              {errors.experience && (
                <p id="experience-error" className="text-gold text-sm mt-1" role="alert">
                  {errors.experience}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gold text-navy py-4 rounded-lg font-semibold text-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Submitting...' : 'Submit Application'}
            </button>

            <p className="text-center text-sm text-navy/70">
              By submitting this form, you agree to our terms and privacy policy.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
