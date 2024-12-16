import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import AnimatedHeading from './AnimatedHeading';
import { heroCaptions } from '../data/heroContent';
import { heroImages } from '../data/heroImages';

interface HeroProps {
  onGetStarted: () => void;
}

const Hero: React.FC<HeroProps> = ({ onGetStarted }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentImages, setCurrentImages] = useState<string[]>([]);
  const [nextImages, setNextImages] = useState<string[]>([]);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const currentTitle = heroCaptions[currentIndex].title;
    const images = heroImages[currentTitle as keyof typeof heroImages] || [];
    setCurrentImages(images);
  }, []);

  const handleIndexChange = (index: number) => {
    setIsTransitioning(true);
    const nextTitle = heroCaptions[index].title;
    const images = heroImages[nextTitle as keyof typeof heroImages] || [];
    setNextImages(images);
    
    setTimeout(() => {
      setCurrentImages(images);
      setIsTransitioning(false);
    }, 1000);
  };

  const scrollToTechnologies = () => {
    const technologiesSection = document.getElementById('technologies');
    if (technologiesSection) {
      technologiesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-primary-900 to-gray-900">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiIGlkPSJhIj48c3RvcCBzdG9wLWNvbG9yPSIjZmZmIiBzdG9wLW9wYWNpdHk9Ii4wNSIgb2Zmc2V0PSIwJSIvPjxzdG9wIHN0b3AtY29sb3I9IiNmZmYiIHN0b3Atb3BhY2l0eT0iMCIgb2Zmc2V0PSIxMDAlIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PHBhdGggZD0iTTAgMGgyMEwwIDIweiIgZmlsbD0idXJsKCNhKSIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+')] opacity-20"></div>
      </div>

      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-radial from-primary-500/30 via-transparent to-transparent blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-radial from-secondary-500/30 via-transparent to-transparent blur-3xl animate-pulse delay-1000"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-12">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-6 z-10 flex flex-col h-[500px]">
            <div className="flex-grow">
              <AnimatedHeading 
                captions={heroCaptions} 
                onIndexChange={handleIndexChange}
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <button
                onClick={onGetStarted}
                className="group relative px-8 py-3 bg-gradient-to-r from-primary-600 to-secondary-600 text-white font-medium rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/25"
              >
                <div className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-white/20 to-transparent transform -skew-x-12 transition-transform duration-300 group-hover:translate-x-full"></div>
                <span className="relative flex items-center justify-center">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5 animate-bounce-x" />
                </span>
              </button>
              <button 
                onClick={scrollToTechnologies}
                className="px-8 py-3 bg-white/10 text-white font-medium rounded-lg backdrop-blur-lg hover:bg-white/20 transition-all duration-300"
              >
                Explore Labs
              </button>
            </div>
          </div>

          <div className="hidden lg:block lg:col-span-6 relative h-[500px]">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-full h-[400px]">
                {/* First Image */}
                <div className={`absolute right-0 top-0 w-[300px] h-[250px] rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-1000 ${
                  isTransitioning ? 'opacity-0 translate-x-full' : 'opacity-100 translate-x-0'
                }`}>
                  <img
                    src={currentImages[0]}
                    alt="Hero visual 1"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 mix-blend-overlay" />
                </div>

                {/* Second Image */}
                <div className={`absolute right-20 bottom-0 w-[300px] h-[250px] rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-1000 ${
                  isTransitioning ? 'opacity-0 -translate-x-full' : 'opacity-100 translate-x-0'
                }`}>
                  <img
                    src={currentImages[1]}
                    alt="Hero visual 2"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 mix-blend-overlay" />
                </div>

                {/* Transition Images */}
                {isTransitioning && (
                  <>
                    <div className="absolute right-0 top-0 w-[300px] h-[250px] rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-1000 translate-x-0 opacity-100">
                      <img
                        src={nextImages[0]}
                        alt="Next hero visual 1"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 mix-blend-overlay" />
                    </div>
                    <div className="absolute right-20 bottom-0 w-[300px] h-[250px] rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-1000 translate-x-0 opacity-100">
                      <img
                        src={nextImages[1]}
                        alt="Next hero visual 2"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 mix-blend-overlay" />
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;