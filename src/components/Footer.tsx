import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from './Logo';

interface FooterProps {
  onContactClick: () => void;
}

const Footer: React.FC<FooterProps> = ({ onContactClick }) => {
  const navigate = useNavigate();

  const handleClick = (href: string) => {
    if (href.startsWith('#')) {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(href.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  const navigation = {
    solutions: [
      { name: 'Individual Learning', href: '#solutions' },
      { name: 'Training Companies', href: '#solutions' },
      { name: 'Educational Institutes', href: '#solutions' },
      { name: 'Enterprise', href: '#solutions' },
    ],
    support: [
      { name: 'Documentation', href: '#' },
      { name: 'API Reference', href: '#' },
      { name: 'Community', href: '#' },
      { name: 'Contact Us', onClick: onContactClick },
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Blog', href: '/blog' },
      { name: 'Careers', href: '/careers' },
      { name: 'Partners', href: '/partners' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy-policy' },
      { name: 'Terms of Service', href: '/terms-of-service' },
      { name: 'Cookie Policy', href: '/cookie-policy' },
    ],
  };

  const renderLink = (item: { name: string; href?: string; onClick?: () => void }) => {
    if (item.onClick) {
      return (
        <button
          onClick={item.onClick}
          className="text-base text-gray-300 hover:text-white transition-colors"
        >
          {item.name}
        </button>
      );
    }
    if (item.href?.startsWith('#')) {
      return (
        <button 
          onClick={() => handleClick(item.href!)}
          className="text-base text-gray-300 hover:text-white transition-colors"
        >
          {item.name}
        </button>
      );
    }
    return (
      <Link 
        to={item.href || '#'} 
        className="text-base text-gray-300 hover:text-white transition-colors"
      >
        {item.name}
      </Link>
    );
  };

  return (
    <footer className="bg-gray-900" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <Link to="/" className="flex items-center">
              <Logo className="h-8 w-8" />
              <span className="ml-2 text-xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                GoLabing.ai
              </span>
            </Link>
            <p className="text-gray-400 text-base">
              Transforming IT learning with AI-powered hands-on labs and personalized experiences.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  Solutions
                </h3>
                <ul className="mt-4 space-y-4">
                  {navigation.solutions.map((item) => (
                    <li key={item.name}>{renderLink(item)}</li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  Support
                </h3>
                <ul className="mt-4 space-y-4">
                  {navigation.support.map((item) => (
                    <li key={item.name}>{renderLink(item)}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  Company
                </h3>
                <ul className="mt-4 space-y-4">
                  {navigation.company.map((item) => (
                    <li key={item.name}>{renderLink(item)}</li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  Legal
                </h3>
                <ul className="mt-4 space-y-4">
                  {navigation.legal.map((item) => (
                    <li key={item.name}>{renderLink(item)}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2">
              <p className="text-base text-gray-400">
                &copy; {new Date().getFullYear()} GoLabing.ai. All rights reserved.
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-gray-400">Developed by</span>
              <a 
                href="https://techute.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary-400 hover:text-primary-300 transition-colors duration-300"
              >
                Techute Pvt Ltd
              </a>
              <span className="text-gray-400 mx-2">|</span>
              <div className="flex items-center space-x-2">
                <img
                  src="https://zeevector.com/wp-content/uploads/2021/02/Make-in-India-Logo-PNG-HD.png"
                  alt="Make in India"
                  className="h-6 w-auto"
                />
                <span className="text-gray-400">Initiative</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;