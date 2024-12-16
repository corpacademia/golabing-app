import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ArrowRight } from 'lucide-react';
import { solutions } from '../data/solutions';

const Solutions = () => {
  const [activeTab, setActiveTab] = useState(0);
  const TabIcon = solutions[activeTab].icon;

  return (
    <section id="solutions" className="relative py-20 overflow-hidden bg-gradient-to-b from-gray-900 to-gray-800">
      {/* Dynamic Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiIGlkPSJhIj48c3RvcCBzdG9wLWNvbG9yPSIjZmZmIiBzdG9wLW9wYWNpdHk9Ii4wNSIgb2Zmc2V0PSIwJSIvPjxzdG9wIHN0b3AtY29sb3I9IiNmZmYiIHN0b3Atb3BhY2l0eT0iMCIgb2Zmc2V0PSIxMDAlIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PHBhdGggZD0iTTAgMGg2MEwwIDYweiIgZmlsbD0idXJsKCNhKSIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+')] opacity-10"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-radial from-primary-500/20 via-transparent to-transparent blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-radial from-secondary-500/20 via-transparent to-transparent blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-white sm:text-5xl">
            <span className="block">Complete Solution for Everyone</span>
            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400 animate-gradient-x">
              in the IT Training Industry
            </span>
          </h2>
          <p className="mt-4 text-xl text-gray-400">
            Tailored solutions that transform the way you deliver IT training
          </p>
        </div>

        {/* Solution Tabs */}
        <div className="flex justify-center mb-12 space-x-4">
          {solutions.map((solution, index) => {
            const TabIcon = solution.icon;
            return (
              <button
                key={solution.id}
                onClick={() => setActiveTab(index)}
                className={`group relative px-6 py-3 rounded-lg transition-all duration-300 ${
                  activeTab === index
                    ? 'text-white'
                    : 'text-gray-400 hover:text-gray-200'
                }`}
              >
                {/* Background Gradient */}
                <div
                  className={`absolute inset-0 rounded-lg transition-opacity duration-300 ${
                    activeTab === index
                      ? 'opacity-100 bg-gradient-to-r from-primary-600/50 to-secondary-600/50'
                      : 'opacity-0 group-hover:opacity-50 bg-white/10'
                  }`}
                />
                
                {/* Content */}
                <div className="relative flex items-center space-x-2">
                  <TabIcon className={`w-5 h-5 ${
                    activeTab === index ? 'text-primary-400' : 'text-gray-400'
                  }`} />
                  <span className="font-medium">{solution.title}</span>
                </div>

                {/* Active Indicator */}
                {activeTab === index && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-500 to-secondary-500" />
                )}
              </button>
            );
          })}
        </div>

        {/* Content Area */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-3xl font-bold text-white">
                  {solutions[activeTab].title}
                </h3>
                <p className="text-lg text-gray-400">
                  {solutions[activeTab].description}
                </p>
              </div>

              {/* Features Grid */}
              <div className="grid gap-4">
                {solutions[activeTab].features.map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="group flex items-center space-x-3 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors duration-300"
                  >
                    <ChevronRight className="w-5 h-5 text-primary-400" />
                    <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                      {feature}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* CTA Button */}
              <button className="group relative px-8 py-3 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-white/20 transform -skew-x-12 translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
                <span className="relative flex items-center justify-center text-white font-medium">
                  Learn More
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </button>
            </div>

            {/* Right Content - Image Display */}
            <div className="relative flex justify-center">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                className="relative w-full h-[400px] rounded-2xl overflow-hidden"
              >
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 mix-blend-overlay"></div>
                
                {/* Image */}
                <img
                  src={solutions[activeTab].image}
                  alt={solutions[activeTab].title}
                  className="w-full h-full object-cover rounded-2xl"
                />
                
                {/* Glass Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-900/30 to-secondary-900/30 backdrop-blur-sm"></div>
                
                {/* Animated Border */}
                <div className="absolute inset-0 rounded-2xl border border-white/10"></div>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Solutions;