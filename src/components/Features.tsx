'use client';

import { FaGraduationCap, FaTrophy, FaCalendarAlt, FaMoneyBillWave, FaChartLine, FaCogs } from 'react-icons/fa';

export default function Features() {
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
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mb-4">
            Program <span className="text-gold">Features</span>
          </h2>
          <p className="text-xl text-navy/70 max-w-3xl mx-auto">
            Experience a premium MBA program designed for the AI-driven business landscape.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-lg border border-navy border-opacity-10"
            >
              <div className="text-4xl mb-4 text-gold">{feature.icon}</div>
              <h3 className="text-xl font-bold text-navy mb-3">
                {feature.title}
              </h3>
              <p className="text-navy/70 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16 mb-12">
          <h3 className="text-2xl font-bold text-navy">
            Specialization Options
          </h3>
          <p className="text-navy/70 mt-2">
            Choose from three specialized tracks to tailor your MBA to your career goals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specializations.map((spec, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-lg border border-navy border-opacity-10"
            >
              <div className="text-4xl mb-4 text-gold">{spec.icon}</div>
              <h3 className="text-xl font-bold text-navy mb-3">
                {spec.title}
              </h3>
              <p className="text-navy/70 leading-relaxed">
                {spec.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
