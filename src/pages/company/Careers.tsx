import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, Clock, Code, Shield, Brain } from 'lucide-react';

const positions = [
  {
    id: 'ai-engineer',
    title: 'AI/ML Engineer',
    department: 'Engineering',
    location: 'Remote',
    type: 'Full-time',
    icon: Brain,
    description: 'Join us in developing cutting-edge AI solutions for our learning platform.',
    requirements: [
      'Experience with machine learning and deep learning frameworks',
      'Strong Python programming skills',
      'Background in natural language processing',
      'Understanding of cloud computing platforms'
    ]
  },
  {
    id: 'full-stack',
    title: 'Senior Full Stack Developer',
    department: 'Engineering',
    location: 'Remote',
    type: 'Full-time',
    icon: Code,
    description: 'Help build and scale our cloud-based lab platform infrastructure.',
    requirements: [
      'Experience with React and Node.js',
      'Knowledge of cloud services (AWS/Azure/GCP)',
      'Understanding of DevOps practices',
      'Experience with microservices architecture'
    ]
  },
  {
    id: 'security',
    title: 'Cloud Security Engineer',
    department: 'Security',
    location: 'Remote',
    type: 'Full-time',
    icon: Shield,
    description: 'Ensure the security and compliance of our cloud infrastructure.',
    requirements: [
      'Experience with cloud security architecture',
      'Knowledge of compliance frameworks',
      'Understanding of network security',
      'Incident response experience'
    ]
  }
];

const Careers = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl">
            <span className="block">Join Our Team</span>
            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400">
              Build the Future of IT Learning
            </span>
          </h1>
          <p className="mt-4 text-xl text-gray-400">
            Be part of Techute Pvt Ltd's team that's revolutionizing IT education through GoLabing.ai
          </p>
        </div>

        {/* Open Positions */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {positions.map((position, index) => (
            <motion.div
              key={position.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-gray-800/50 backdrop-blur-xl rounded-2xl overflow-hidden hover:bg-gray-700/50 transition-all duration-300"
            >
              <div className="p-6">
                {/* Header */}
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary-500/10 group-hover:bg-primary-500/20 transition-colors duration-300">
                    <position.icon className="h-6 w-6 text-primary-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white group-hover:text-primary-400 transition-colors duration-300">
                    {position.title}
                  </h3>
                </div>

                {/* Details */}
                <div className="space-y-4">
                  <p className="text-gray-400">{position.description}</p>

                  <div className="flex flex-wrap gap-2">
                    <div className="flex items-center text-sm text-gray-400">
                      <Briefcase className="h-4 w-4 mr-1" />
                      {position.department}
                    </div>
                    <div className="flex items-center text-sm text-gray-400">
                      <MapPin className="h-4 w-4 mr-1" />
                      {position.location}
                    </div>
                    <div className="flex items-center text-sm text-gray-400">
                      <Clock className="h-4 w-4 mr-1" />
                      {position.type}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-gray-300">Requirements:</h4>
                    <ul className="space-y-1">
                      {position.requirements.map((req, idx) => (
                        <li key={idx} className="text-sm text-gray-400 flex items-start">
                          <span className="mr-2 text-primary-400">•</span>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button className="w-full px-4 py-2 bg-gradient-to-r from-primary-600 to-secondary-600 text-white font-medium rounded-lg hover:from-primary-700 hover:to-secondary-700 transition-all duration-300">
                    Apply Now
                  </button>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-secondary-500/10 opacity-0 group-hover:opacity-100 transition-all duration-500" />
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            </motion.div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="text-center mt-16">
          <p className="text-gray-400">
            Don't see a position that matches your skills? Email us at{' '}
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

export default Careers;