import React from 'react';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl font-extrabold text-white mb-8">Terms of Service</h1>
        
        <div className="space-y-6 text-gray-300">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing and using GoLabing.ai, you agree to be bound by these Terms of Service 
              and all applicable laws and regulations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. Use License</h2>
            <p>
              Permission is granted to temporarily access the materials on GoLabing.ai for personal, 
              non-commercial transitory viewing only.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. Service Description</h2>
            <p>
              GoLabing.ai provides AI-powered hands-on lab environments for IT training and skill development. 
              The platform includes various lab types, learning resources, and assessment tools.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. User Obligations</h2>
            <p>
              Users are responsible for maintaining the confidentiality of their account information 
              and for all activities that occur under their account.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Intellectual Property</h2>
            <p>
              All content and materials available on GoLabing.ai are the property of Techute Pvt Ltd 
              and are protected by applicable copyright and trademark law.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">6. Limitation of Liability</h2>
            <p>
              GoLabing.ai and its licensors shall not be liable for any indirect, incidental, 
              special, consequential or punitive damages resulting from your use of the service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">7. Changes to Terms</h2>
            <p>
              We reserve the right to modify these terms at any time. We will notify users of any 
              material changes by posting the new Terms of Service on this page.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">8. Contact</h2>
            <div className="text-gray-300">
              <p>For questions about these Terms, please contact us at:</p>
              <p className="mt-2">Email: hello@golabing.ai</p>
              <p className="mt-2">GoLabing.ai is a product of Techute Pvt Ltd</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;