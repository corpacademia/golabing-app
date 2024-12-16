import React, { useState, useEffect } from 'react';

interface AnimatedHeadingProps {
  captions: Array<{
    title: string;
    subtitle: string;
    features: Array<{ icon: React.ElementType; text: string }>;
  }>;
  onIndexChange?: (index: number) => void;
}

const TYPING_SPEED = 40;
const DISPLAY_DURATION = 4000;
const TRANSITION_DURATION = 1000;

const AnimatedHeading: React.FC<AnimatedHeadingProps> = ({ captions, onIndexChange }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [displayText, setDisplayText] = useState('');
  const [displaySubText, setDisplaySubText] = useState('');

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const currentCaption = captions[currentIndex];
    
    if (isTyping) {
      if (displayText !== currentCaption.title) {
        timeout = setTimeout(() => {
          setDisplayText(currentCaption.title.slice(0, displayText.length + 1));
        }, TYPING_SPEED);
      } else if (displaySubText !== currentCaption.subtitle) {
        timeout = setTimeout(() => {
          setDisplaySubText(currentCaption.subtitle.slice(0, displaySubText.length + 1));
        }, TYPING_SPEED);
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, DISPLAY_DURATION);
      }
    } else {
      timeout = setTimeout(() => {
        setDisplayText('');
        setDisplaySubText('');
        const nextIndex = (currentIndex + 1) % captions.length;
        setCurrentIndex(nextIndex);
        onIndexChange?.(nextIndex);
        setIsTyping(true);
      }, TRANSITION_DURATION);
    }

    return () => clearTimeout(timeout);
  }, [currentIndex, displayText, displaySubText, isTyping, captions, onIndexChange]);

  return (
    <div className="flex flex-col h-full">
      {/* Heading Section - Fixed Height */}
      <div className="mb-12">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
          <div className="h-24 mb-4">
            <span className="block text-white animate-fade-in">
              {displayText}
              <span className="animate-pulse">|</span>
            </span>
          </div>
          <div className="h-24">
            <span className="block bg-gradient-to-r from-primary-400 via-secondary-400 to-accent-400 bg-clip-text text-transparent animate-gradient-x">
              {displaySubText}
            </span>
          </div>
        </h1>
      </div>

      {/* Features Section - Fixed Position */}
      <div className="space-y-4 mt-auto">
        {captions[currentIndex].features.map((feature, index) => (
          <div
            key={index}
            className="flex items-center space-x-3 text-gray-300 transform hover:translate-x-2 transition-transform duration-300"
            style={{
              animation: `fadeIn 0.5s ease-out ${index * 0.1}s forwards`,
              opacity: 0,
            }}
          >
            <feature.icon className="h-5 w-5 text-primary-400" />
            <span>{feature.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedHeading;