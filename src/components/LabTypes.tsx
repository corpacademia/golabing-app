import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { labTypes } from '../data/labTypes';

const LabTypes = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="lab-types" className="relative py-20 bg-gradient-to-b from-gray-900 to-gray-800 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiIGlkPSJhIj48c3RvcCBzdG9wLWNvbG9yPSIjZmZmIiBzdG9wLW9wYWNpdHk9Ii4wNSIgb2Zmc2V0PSIwJSIvPjxzdG9wIHN0b3AtY29sb3I9IiNmZmYiIHN0b3Atb3BhY2l0eT0iMCIgb2Zmc2V0PSIxMDAlIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PHBhdGggZD0iTTAgMGg2MEwwIDYweiIgZmlsbD0idXJsKCNhKSIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+')] opacity-10"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-radial from-primary-500/20 via-transparent to-transparent blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-radial from-secondary-500/20 via-transparent to-transparent blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-white sm:text-5xl">
            <span className="block">Types of Labing Environment</span>
            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400 animate-gradient-x">
              Comprehensive Lab Solutions for Every Need
            </span>
          </h2>
          <p className="mt-4 text-xl text-gray-400">
            Choose from our diverse range of lab environments tailored to your requirements
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {labTypes.map((type) => {
            const Icon = type.icon;
            const BulletIcon = type.bulletIcon;
            
            return (
              <motion.div
                key={type.id}
                variants={cardVariants}
                onHoverStart={() => setHoveredCard(type.id)}
                onHoverEnd={() => setHoveredCard(null)}
                className="group relative bg-gray-800/50 backdrop-blur-xl rounded-2xl overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary-500/20"
              >
                <div className="p-6">
                  {/* Header */}
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-2 rounded-lg bg-primary-500/10 group-hover:bg-primary-500/20 transition-colors duration-300">
                      <Icon className="h-6 w-6 text-primary-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-white group-hover:text-primary-300 transition-colors duration-300">
                      {type.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-gray-400 mb-6 group-hover:text-gray-300 transition-colors duration-300">
                    {type.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-3">
                    {type.features.map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-2 text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300"
                      >
                        <BulletIcon className="h-4 w-4 text-primary-400" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-secondary-500/10 opacity-0 group-hover:opacity-100 transition-all duration-500" />
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default LabTypes;