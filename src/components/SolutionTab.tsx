import React from 'react';
import { Check } from 'lucide-react';

interface SolutionTabProps {
  title: string;
  description: string;
  features: string[];
  icon: React.ElementType;
}

const SolutionTab = ({ title, description, features, icon: Icon }: SolutionTabProps) => {
  return (
    <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
      <div className="relative">
        <div className="relative lg:ml-10">
          <div className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
            {title}
          </div>
          <p className="mt-3 text-lg text-gray-500">
            {description}
          </p>
          <ul className="mt-8 space-y-5">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <div className="flex-shrink-0">
                  <Check className="h-6 w-6 text-green-500" />
                </div>
                <p className="ml-3 text-base text-gray-500">{feature}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mt-10 lg:mt-0 flex justify-center">
        <Icon className="h-48 w-48 text-indigo-600 opacity-75" />
      </div>
    </div>
  );
};

export default SolutionTab;