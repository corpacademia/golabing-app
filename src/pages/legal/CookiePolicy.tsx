import React from 'react';

const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl font-extrabold text-white mb-8">Cookie Policy</h1>
        
        <div className="space-y-6 text-gray-300">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
            <p>
              This Cookie Policy explains how GoLabing.ai uses cookies and similar technologies 
              to recognize you when you visit our platform.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. What are Cookies?</h2>
            <p>
              Cookies are small data files that are placed on your computer or mobile device when 
              you visit a website. They are widely used to make websites work more efficiently 
              and provide reporting information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. How We Use Cookies</h2>
            <div>
              <p>We use cookies for several purposes, including:</p>
              <ul className="list-disc list-inside mt-2 space-y-2">
                <li>Authentication and security</li>
                <li>Preferences and settings</li>
                <li>Analytics and performance</li>
                <li>Personalized content delivery</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Managing Cookies</h2>
            <p>
              Most web browsers allow you to control cookies through their settings preferences. 
              However, limiting cookies may impact your experience using our platform.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Updates to This Policy</h2>
            <p>
              We may update this Cookie Policy from time to time. We will notify you of any 
              changes by posting the new policy on this page.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">6. Contact Us</h2>
            <div className="text-gray-300">
              <p>If you have questions about our Cookie Policy, please contact us at:</p>
              <p className="mt-2">Email: hello@golabing.ai</p>
              <p className="mt-2">GoLabing.ai is a product of CorpAcademia iTechnovations Pvt Ltd</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;