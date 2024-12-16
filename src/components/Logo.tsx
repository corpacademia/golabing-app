import React from 'react';

const Logo = ({ className = "h-10 w-10" }) => {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Gradients */}
      <defs>
        <linearGradient id="primaryGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0c8ee7" />
          <stop offset="100%" stopColor="#8257fe" />
        </linearGradient>
        <linearGradient id="secondaryGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#15b38d" />
          <stop offset="100%" stopColor="#0c8ee7" />
        </linearGradient>
      </defs>

      {/* Background Circle */}
      <circle
        cx="50"
        cy="50"
        r="44"
        fill="none"
        stroke="url(#primaryGradient)"
        strokeWidth="8"
        className="animate-pulse"
      />

      {/* Main Cloud Shape */}
      <path
        d="M25,55 C25,48 31,42 38,42 C38,35 44,30 50,30 C56,30 62,35 62,42 C69,42 75,48 75,55 C75,62 69,68 62,68 L38,68 C31,68 25,62 25,55Z"
        fill="none"
        stroke="url(#primaryGradient)"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Virtual Machines */}
      <g transform="translate(40, 45)">
        {/* VM Stack */}
        <rect
          x="0"
          y="0"
          width="20"
          height="4"
          rx="1"
          fill="url(#secondaryGradient)"
          className="animate-pulse"
          stroke="url(#primaryGradient)"
          strokeWidth="2"
        />
        <rect
          x="2"
          y="6"
          width="20"
          height="4"
          rx="1"
          fill="url(#secondaryGradient)"
          className="animate-pulse"
          stroke="url(#primaryGradient)"
          strokeWidth="2"
        />
        <rect
          x="4"
          y="12"
          width="20"
          height="4"
          rx="1"
          fill="url(#secondaryGradient)"
          className="animate-pulse"
          stroke="url(#primaryGradient)"
          strokeWidth="2"
        />
      </g>

      {/* Data Flow Points */}
      <g fill="url(#primaryGradient)">
        <circle cx="35" cy="50" r="3.5" className="animate-pulse" />
        <circle cx="65" cy="50" r="3.5" className="animate-pulse" />
        <circle cx="50" cy="35" r="3.5" className="animate-pulse" />
      </g>
    </svg>
  );
};

export default Logo;