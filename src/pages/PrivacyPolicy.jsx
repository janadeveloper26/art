import React from 'react';
import PageWrapper from '../components/PageWrapper';
import SEO from '../components/SEO';

export default function PrivacyPolicy() {
  return (
    <PageWrapper>
      <SEO 
        title="Privacy Policy | Glorious Art Academy" 
        description="Privacy Policy for Glorious Art Academy" 
      />
      <div className="container-custom py-24 md:py-32">
        <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-100">
          <h1 className="heading-special text-slate-900 mb-8">Privacy Policy</h1>
          <div className="prose prose-slate max-w-none prose-headings:font-serif prose-headings:text-slate-900 prose-p:text-slate-600">
            <p className="text-lg">Last updated: {new Date().toLocaleDateString()}</p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">1. Information We Collect</h2>
            <p>At Glorious Art Academy, we collect information that you provide directly to us when you register for courses, fill out contact forms, or communicate with us. This may include your name, email address, phone number, and physical address.</p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">2. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-6 mb-4 text-slate-600">
              <li>Process your enrollment in our Aari, Tailoring, and Makeup courses.</li>
              <li>Communicate with you regarding course schedules, updates, and materials.</li>
              <li>Respond to your inquiries and provide customer support.</li>
              <li>Send promotional communications (only with your explicit consent).</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">3. Information Sharing</h2>
            <p>We do not sell or rent your personal information to third parties. We may share your information with trusted service providers who assist us in operating our website and conducting our business, as long as those parties agree to keep this information confidential.</p>

            <h2 className="text-2xl font-bold mt-8 mb-4">4. Data Security</h2>
            <p>We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>

            <h2 className="text-2xl font-bold mt-8 mb-4">5. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us at our Chidambaram center or via the contact methods provided on our website.</p>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
