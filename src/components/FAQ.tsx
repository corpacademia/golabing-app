import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const FAQ = () => {
  const [activeId, setActiveId] = useState<string | null>(null);

  const faqs = [
    {
      id: 'what-is',
      question: 'What is GoLabing.ai?',
      answer: 'GoLabing.ai is an AI-powered hands-on lab platform designed specifically for IT learning. We provide comprehensive lab environments across multiple technologies, enabling practical experience in cloud computing, cybersecurity, networking, and more.'
    },
    {
      id: 'lab-types',
      question: 'What types of lab environments are available?',
      answer: 'We offer multiple lab types including Cloud VMs, Dedicated VMs, Clustered Labs, Cloud Account Slices, Environment Emulators, Real Hardware Labs, and Click-Through Guided Labs. Each type is optimized for specific learning scenarios and technologies.'
    },
    {
      id: 'ai-features',
      question: 'How does AI enhance the learning experience?',
      answer: 'Our AI system provides personalized learning paths, optimizes resource allocation, recommends relevant labs based on your goals, analyzes skill progression, and helps in cost optimization of cloud resources. It continuously adapts to your learning style and pace.'
    },
    {
      id: 'cost',
      question: 'How is billing handled for lab resources?',
      answer: 'We offer flexible billing options including pay-as-you-go for individuals, subscription plans for enterprises, and custom pricing for educational institutions. Our AI system helps optimize resource usage to minimize costs while maximizing learning effectiveness.'
    },
    {
      id: 'support',
      question: 'What kind of support is available?',
      answer: 'We provide 24/7 technical support, detailed documentation, video tutorials, and a community forum. Enterprise customers get dedicated support managers and priority assistance for their specific needs.'
    }
  ];

  const toggleFaq = (id: string) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <section id="faq" className="relative py-20 bg-gradient-to-b from-gray-900 to-gray-800 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiIGlkPSJhIj48c3RvcCBzdG9wLWNvbG9yPSIjZmZmIiBzdG9wLW9wYWNpdHk9Ii4wNSIgb2Zmc2V0PSIwJSIvPjxzdG9wIHN0b3AtY29sb3I9IiNmZmYiIHN0b3Atb3BhY2l0eT0iMCIgb2Zmc2V0PSIxMDAlIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PHBhdGggZD0iTTAgMGg2MEwwIDYweiIgZmlsbD0idXJsKCNhKSIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+')] opacity-10" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-radial from-primary-500/20 via-transparent to-transparent blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-radial from-secondary-500/20 via-transparent to-transparent blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-white sm:text-5xl">
            <span className="block">Frequently Asked Questions</span>
            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400 animate-gradient-x">
              Get Quick Answers
            </span>
          </h2>
          <p className="mt-4 text-xl text-gray-400">
            Everything you need to know about our platform
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <motion.div
              key={faq.id}
              initial={false}
              className="relative overflow-hidden rounded-2xl bg-gray-800/50 backdrop-blur-xl hover:bg-gray-800/70 transition-colors duration-300"
            >
              <button
                onClick={() => toggleFaq(faq.id)}
                className="w-full px-6 py-4 text-left flex items-center justify-between"
              >
                <span className="text-lg font-medium text-white">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: activeId === faq.id ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex-shrink-0 ml-4"
                >
                  <ChevronDown className="w-5 h-5 text-primary-400" />
                </motion.div>
              </button>

              <AnimatePresence initial={false}>
                {activeId === faq.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    <div className="px-6 pb-4">
                      <p className="text-gray-400">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Decorative gradient line */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;