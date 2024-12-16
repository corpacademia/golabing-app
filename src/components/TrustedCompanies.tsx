import React from 'react';

interface Company {
  name: string;
  logo: string;
}

const companies: Company[] = [
  {
    name: 'TechCorp Inc.',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/a/ab/Android_O_Preview_Logo.png'
  },
  {
    name: 'InnovateLabs',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg'
  },
  {
    name: 'CloudMasters',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/3/37/Firebase_Logo.svg'
  },
  {
    name: 'DataTech Solutions',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Socket-io.svg'
  },
  {
    name: 'AI Ventures',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg'
  },
  {
    name: 'CloudFlow Systems',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg'
  },
  {
    name: 'Digital Dynamics',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg'
  },
  {
    name: 'Tech Innovate',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg'
  }
];

const TrustedCompanies = () => {
  return (
    <section className="relative bg-gradient-to-b from-primary-900 to-gray-900 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-semibold uppercase text-gray-400 tracking-wide mb-4">
          Trusted by leading companies worldwide
        </p>
        
        <div className="relative w-full overflow-hidden">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-r from-primary-900 to-transparent"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-l from-primary-900 to-transparent"></div>
          
          {/* Marquee Container */}
          <div className="flex gap-8 animate-marquee">
            {/* First set of logos */}
            {[...companies, ...companies].map((company, idx) => (
              <div
                key={`${company.name}-${idx}`}
                className="flex flex-col items-center justify-center min-w-[120px] px-3"
              >
                <div className="w-full h-8 mb-2">
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="w-full h-full object-contain filter brightness-0 invert opacity-40 hover:opacity-80 transition-opacity duration-300"
                  />
                </div>
                <span className="text-xs text-gray-400 font-medium text-center whitespace-nowrap hover:text-gray-200 transition-colors duration-300">
                  {company.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedCompanies;