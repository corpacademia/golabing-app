import React from 'react';
import { motion } from 'framer-motion';
import { Handshake, Award, Globe, Rocket } from 'lucide-react';

const partnerTypes = [
  {
    title: 'Technology Partners',
    description: 'Join our ecosystem of technology providers to expand your reach',
    icon: Rocket,
    benefits: [
      'Integration with our AI-powered platform',
      'Access to growing user base',
      'Co-marketing opportunities',
      'Technical collaboration'
    ]
  },
  {
    title: 'Training Partners',
    description: 'Deliver high-impact training using our platform',
    icon: Award,
    benefits: [
      'White-label solutions',
      'Custom lab environments',
      'Revenue sharing model',
      'Training support'
    ]
  },
  {
    title: 'Global Resellers',
    description: 'Represent GoLabing.ai in your region',
    icon: Globe,
    benefits: [
      'Exclusive territory rights',
      'Competitive margins',
      'Sales and marketing support',
      'Partner portal access'
    ]
  },
  {
    title: 'Strategic Alliances',
    description: 'Build long-term partnerships for mutual growth',
    icon: Handshake,
    benefits: [
      'Joint solution development',
      'Market expansion',
      'Resource sharing',
      'Innovation collaboration'
    ]
  }
];

const Partners = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl">
            <span className="block">Partner Program</span>
            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400">
              Grow Together with GoLabing.ai
            </span>
          </h1>
          <p className="mt-4 text-xl text-gray-400">
            Join CorpAcademia iTechnovations Pvt Ltd's ecosystem of technology and training partners for GoLabing.ai
          </p>
        </div>

        {/* Partner Types Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {partnerTypes.map((type, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-gray-800/50 backdrop-blur-xl rounded-2xl overflow-hidden hover:bg-gray-700/50 transition-all duration-300"
            >
              <div className="p-6">
                {/* Header */}
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary-500/10 group-hover:bg-primary-500/20 transition-colors duration-300">
                    <type.icon className="h-6 w-6 text-primary-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white group-hover:text-primary-400 transition-colors duration-300">
                    {type.title}
                  </h3>
                </div>

                {/* Content */}
                <p className="text-gray-400 mb-4 group-hover:text-gray-300 transition-colors duration-300">
                  {type.description}
                </p>

                {/* Benefits */}
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-gray-300">Key Benefits:</h4>
                  <ul className="space-y-1">
                    {type.benefits.map((benefit, idx) => (
                      <li key={idx} className="text-sm text-gray-400 flex items-start">
                        <span className="mr-2 text-primary-400">•</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <button className="mt-6 w-full px-4 py-2 bg-gradient-to-r from-primary-600 to-secondary-600 text-white font-medium rounded-lg hover:from-primary-700 hover:to-secondary-700 transition-all duration-300">
                  Join as Partner
                </button>
              </div>

              {/* Decorative Elements */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-secondary-500/10 opacity-0 group-hover:opacity-100 transition-all duration-500" />
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            </motion.div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="text-center mt-16">
          <h2 className="text-2xl font-bold text-white mb-4">Get in Touch</h2>
          <p className="text-gray-400">
            Interested in partnering with us? Contact our partnership team at{' '}
            <a
              href="mailto:hello@golabing.ai"
              className="text-primary-400 hover:text-primary-300 transition-colors"
            >
              hello@golabing.ai
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Partners;