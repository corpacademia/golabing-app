import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, Globe, Award, Rocket, Heart } from 'lucide-react';

const values = [
  {
    icon: Target,
    title: 'Innovation',
    description: 'Pushing boundaries with AI-powered learning solutions'
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'Building strong partnerships in the IT training ecosystem'
  },
  {
    icon: Globe,
    title: 'Accessibility',
    description: 'Making quality IT training available worldwide'
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'Delivering high-quality, industry-standard lab environments'
  },
  {
    icon: Rocket,
    title: 'Innovation',
    description: 'Continuously evolving our platform with cutting-edge technology'
  },
  {
    icon: Heart,
    title: 'Customer Focus',
    description: "Putting our users' success at the heart of everything we do"
  }
];

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl">
            <span className="block">About Us</span>
            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400">
              Revolutionizing IT Learning
            </span>
          </h1>
          <p className="mt-4 text-xl text-gray-400 max-w-3xl mx-auto">
            At GoLabing.ai, a product of Techute Pvt Ltd, we're transforming the landscape of IT education through innovative, AI-powered hands-on learning experiences.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gray-800/50 backdrop-blur-xl p-8 rounded-2xl"
          >
            <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
            <p className="text-gray-300">
              To democratize IT learning by providing accessible, practical, and cutting-edge lab environments that empower individuals and organizations to master complex technologies effectively.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-gray-800/50 backdrop-blur-xl p-8 rounded-2xl"
          >
            <h2 className="text-2xl font-bold text-white mb-4">Our Vision</h2>
            <p className="text-gray-300">
              To be the global leader in AI-powered hands-on IT training, setting new standards for practical learning and skill development in the digital age.
            </p>
          </motion.div>
        </div>

        {/* Company Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-8">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group bg-gray-800/50 backdrop-blur-xl p-6 rounded-2xl hover:bg-gray-700/50 transition-all duration-300"
              >
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-lg bg-primary-500/10 group-hover:bg-primary-500/20 transition-colors duration-300">
                    <value.icon className="h-6 w-6 text-primary-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white group-hover:text-primary-400 transition-colors duration-300">
                      {value.title}
                    </h3>
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                      {value.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Get in Touch</h2>
          <p className="text-gray-300 mb-2">Email: hello@golabing.ai</p>
          <p className="text-gray-300">
            GoLabing.ai is a product of Techute Pvt Ltd
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;