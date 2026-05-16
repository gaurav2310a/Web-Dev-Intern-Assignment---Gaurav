'use client';

import { useEffect, useState } from 'react';
import { FaGraduationCap, FaTrophy, FaCalendarAlt, FaMoneyBillWave, FaChartLine, FaCogs } from 'react-icons/fa';

export default function Features() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('features');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: <FaGraduationCap />,
      title: '100% Live Online Weekend Classes',
      description: 'Attend interactive live sessions on weekends without disrupting your work schedule.'
    },
    {
      icon: <FaTrophy />,
      title: 'Direct IIM Alumni Status',
      description: 'Join the prestigious IIM alumni network and unlock exclusive career opportunities.'
    },
    {
      icon: <FaCalendarAlt />,
      title: '24-Month Duration with Campus Immersions',
      description: 'Complete your MBA in 2 years with immersive campus experiences for networking.'
    }
  ];

  const specializations = [
    {
      icon: <FaMoneyBillWave />,
      title: 'AI-Powered Finance Specialization',
      description: 'Master financial analytics and AI-driven decision making for modern finance roles.'
    },
    {
      icon: <FaChartLine />,
      title: 'AI-Powered Marketing Specialization',
      description: 'Leverage AI tools to revolutionize marketing strategies and customer engagement.'
    },
    {
      icon: <FaCogs />,
      title: 'AI-Powered Operations Specialization',
      description: 'Optimize operations with AI-driven insights and automation.'
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mb-4">
            Program <span className="text-gradient">Features</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience a cutting-edge MBA program designed for the AI-driven business landscape
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="text-4xl mb-4" style={{ color: 'gold' }}>{feature.icon}</div>
              <h3 className="text-xl font-bold text-navy mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16 mb-12">
          <h3 className="text-2xl font-bold text-navy">
            Specialization Options
          </h3>
          <p className="text-gray-600 mt-2">
            Choose from three specialized tracks to tailor your MBA to your career goals
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specializations.map((spec, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${(index + 3) * 100}ms` }}
            >
              <div className="text-4xl mb-4" style={{ color: 'gold' }}>{spec.icon}</div>
              <h3 className="text-xl font-bold text-navy mb-3">
                {spec.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {spec.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
