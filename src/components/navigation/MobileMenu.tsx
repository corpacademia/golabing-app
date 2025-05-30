import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import NavLink from './NavLink';
import { NavItem } from './types';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  items: NavItem[];
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose, items }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
            onClick={onClose}
          />

          {/* Menu Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed right-0 top-0 h-full w-64 bg-gradient-to-b from-gray-900 to-gray-800 shadow-xl z-50"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute right-4 top-4 p-2 text-gray-400 hover:text-white transition-colors"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Menu Items */}
            <nav className="pt-16 px-4">
              <div className="space-y-2">
                {items.map((item) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    <NavLink href={item.href} onClick={onClose}>
                      {item.name}
                    </NavLink>
                  </motion.div>
                ))}
              </div>

              {/* Auth Buttons */}
              <div className="mt-8 space-y-4">
                <a
                  href="https://app.golabing.ai/login"
                  className="block w-full px-6 py-3 text-center text-white font-medium hover:text-primary-400 transition-colors duration-300"
                  onClick={onClose}
                >
                  Login
                </a>
                <a
                  href="https://app.golabing.ai/signup"
                  className="block w-full px-6 py-3 text-center bg-gradient-to-r from-primary-600 to-secondary-600 text-white font-medium rounded-lg hover:from-primary-700 hover:to-secondary-700 transition-all duration-300 whitespace-nowrap"
                  onClick={onClose}
                >
                  Sign Up
                </a>
              </div>
            </nav>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;