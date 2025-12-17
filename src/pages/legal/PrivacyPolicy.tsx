import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl font-extrabold text-white mb-8">Privacy Policy</h1>
        
        <div className="space-y-6 text-gray-300">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
            <p>
              This Privacy Policy describes how GoLabing.ai collects, uses, and protects your personal information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. Information Collection</h2>
            <p>
              We collect information that you provide directly to us, including name, email, and usage data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. Use of Information</h2>
            <p>
              We use collected information to provide and improve our services, communicate with users, and ensure security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Data Protection</h2>
            <p>
              We implement appropriate security measures to protect your personal information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Updates to Policy</h2>
            <p>
              We may update this policy periodically. We will notify users of any material changes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">6. Contact Us</h2>
            <div className="text-gray-300">
              <p>If you have any questions about this Privacy Policy, please contact us at:</p>
              <p className="mt-2">Email: hello@golabing.ai</p>
              <p className="mt-2">GoLabing.ai is a product of Techute Pvt Ltd</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;