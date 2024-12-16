import React from 'react';
import { Brain, Target, DollarSign, LineChart, Database, Cloud, Shield, Cpu, Zap, Book, Cog, BarChart2 } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI Learning Path',
      description: 'Personalized learning recommendations and pathways tailored to your goals and skill level',
      gradient: 'from-blue-500 to-indigo-600'
    },
    {
      icon: DollarSign,
      title: 'Budget Management',
      description: 'Smart cloud account management with predefined budgets and cost controls',
      gradient: 'from-green-500 to-teal-600'
    },
    {
      icon: LineChart,
      title: 'Progress Tracking',
      description: 'Comprehensive monitoring of learning progress and skill development',
      gradient: 'from-purple-500 to-pink-600'
    },
    {
      icon: Target,
      title: 'Skills Assessment',
      description: 'Real-world evaluation of hands-on skills through practical lab exercises',
      gradient: 'from-orange-500 to-red-600'
    },
    {
      icon: Book,
      title: 'Lab Catalogue',
      description: 'AI-powered creation and organization of comprehensive lab libraries',
      gradient: 'from-cyan-500 to-blue-600'
    },
    {
      icon: Cog,
      title: 'Lab Builder',
      description: 'Intelligent lab environment configuration and setup recommendations',
      gradient: 'from-violet-500 to-purple-600'
    },
    {
      icon: Cloud,
      title: 'Infrastructure Optimization',
      description: 'AI-driven cloud resource allocation for maximum cost efficiency',
      gradient: 'from-amber-500 to-orange-600'
    },
    {
      icon: BarChart2,
      title: 'Cost Analytics',
      description: 'Advanced analytics for resource utilization and cost optimization',
      gradient: 'from-emerald-500 to-green-600'
    }
  ];

  return (
    <section id="features" className="relative py-20 overflow-hidden bg-gray-900">
      {/* Rest of the component remains the same */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiIGlkPSJhIj48c3RvcCBzdG9wLWNvbG9yPSIjZmZmIiBzdG9wLW9wYWNpdHk9Ii4wNSIgb2Zmc2V0PSIwJSIvPjxzdG9wIHN0b3AtY29sb3I9IiNmZmYiIHN0b3Atb3BhY2l0eT0iMCIgb2Zmc2V0PSIxMDAlIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PHBhdGggZD0iTTAgMGg2MEwwIDYweiIgZmlsbD0idXJsKCNhKSIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+')] opacity-10"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-radial from-primary-500/20 via-transparent to-transparent blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-radial from-secondary-500/20 via-transparent to-transparent blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold text-white sm:text-5xl">
            <span className="block">AI-Powered Features</span>
            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400 animate-gradient-x">
              Revolutionizing IT Learning
            </span>
          </h2>
          <p className="mt-4 text-xl text-gray-400">
            Advanced capabilities powered by artificial intelligence
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-gray-800/50 backdrop-blur-xl p-8 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary-500/20"
            >
              {/* Animated Border */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-500/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 animate-gradient" />
              
              {/* Icon Container */}
              <div className={`relative inline-flex p-4 rounded-xl bg-gradient-to-br ${feature.gradient} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                <div className="absolute inset-0 rounded-xl bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="mt-6">
                <h3 className="text-xl font-semibold text-white group-hover:text-primary-400 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="mt-4 text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  {feature.description}
                </p>
              </div>

              {/* Hover Effects */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary-500 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-transparent via-secondary-500 to-transparent transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;