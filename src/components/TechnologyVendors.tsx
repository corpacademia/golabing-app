import React from 'react';
import { vendors } from '../data/vendors';

const TechnologyVendors = () => {
  return (
    <section className="relative py-20 bg-gradient-to-b from-gray-900 to-gray-800 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiIGlkPSJhIj48c3RvcCBzdG9wLWNvbG9yPSIjZmZmIiBzdG9wLW9wYWNpdHk9Ii4wNSIgb2Zmc2V0PSIwJSIvPjxzdG9wIHN0b3AtY29sb3I9IiNmZmYiIHN0b3Atb3BhY2l0eT0iMCIgb2Zmc2V0PSIxMDAlIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PHBhdGggZD0iTTAgMGg2MEwwIDYweiIgZmlsbD0idXJsKCNhKSIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+')] opacity-10"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-radial from-primary-500/20 via-transparent to-transparent blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-radial from-secondary-500/20 via-transparent to-transparent blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-white sm:text-5xl">
            <span className="block">Technology Vendors</span>
            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400 animate-gradient-x">
              Leading Industry Partners
            </span>
          </h2>
          <p className="mt-4 text-xl text-gray-400">
            Comprehensive lab environments for industry-leading technology providers
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {vendors.map((vendor, index) => (
            <div
              key={vendor.id}
              className="group relative bg-gray-800/50 backdrop-blur-xl rounded-2xl overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary-500/20"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              {/* Header with Icon and Name */}
              <div className="relative z-10 p-6 bg-gradient-to-b from-gray-800/80 via-gray-800/60 to-transparent">
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-lg bg-primary-500/10 group-hover:bg-primary-500/20 transition-colors duration-300">
                    <vendor.icon className="h-6 w-6 text-primary-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white group-hover:text-primary-300 transition-colors duration-300">
                    {vendor.name}
                  </h3>
                </div>
              </div>

              {/* Logo Display (Visible when not hovered) */}
              <div className="absolute inset-0 flex items-center justify-center p-8 transition-all duration-500 group-hover:opacity-0">
                <img
                  src={vendor.logo}
                  alt={`${vendor.name} logo`}
                  className="max-w-[120px] max-h-[60px] object-contain filter brightness-0 invert opacity-50 group-hover:opacity-0 transition-all duration-500"
                />
              </div>

              {/* Products List (Visible on hover) */}
              <div className="relative p-6 pt-16">
                <div className="space-y-2 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  {vendor.products.map((product, productIndex) => (
                    <div
                      key={productIndex}
                      className="transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300"
                      style={{ transitionDelay: `${productIndex * 50}ms` }}
                    >
                      <div className="flex items-center space-x-2 p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors duration-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary-400"></span>
                        <span className="text-sm text-gray-300">{product}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-secondary-500/10 opacity-0 group-hover:opacity-100 transition-all duration-500" />
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologyVendors;