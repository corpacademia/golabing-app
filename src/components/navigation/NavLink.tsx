import React from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate, useLocation } from 'react-router-dom';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children, onClick }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    
    if (onClick) {
      onClick();
      return;
    }

    // Handle home navigation
    if (href === '/') {
      navigate('/');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    // Handle section navigation from other pages
    if (href.startsWith('#')) {
      const targetId = href.substring(1);
      
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          const element = document.getElementById(targetId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
      return;
    }

    // Handle regular page navigation
    navigate(href);
  };

  return (
    <motion.a
      href={href}
      onClick={handleClick}
      className="relative group px-4 py-2"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Enhanced Neon Glow Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-500/0 via-primary-500/20 to-secondary-500/0 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 blur-md" />
      
      {/* Enhanced Inner Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-500/0 via-primary-500/10 to-secondary-500/0 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300" />
      
      {/* Enhanced Animated Border Glow */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-500/0 via-primary-500/50 to-secondary-500/0 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 blur-lg" />
      
      {/* Enhanced Bottom Border Glow */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary-400 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 blur-md" />
      
      {/* Enhanced Actual Bottom Border */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary-500 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
      
      {/* Enhanced Text with Glow */}
      <span className="relative text-gray-300 font-bold group-hover:text-white transition-colors duration-300 group-hover:drop-shadow-[0_0_12px_rgba(56,189,248,0.7)]">
        {children}
      </span>
    </motion.a>
  );
};

export default NavLink;