import React from 'react';
import PageWrapper from '../components/PageWrapper';
import SEO from '../components/SEO';

export default function TermsOfService() {
  return (
    <PageWrapper>
      <SEO 
        title="Terms of Service | Glorious Art Academy" 
        description="Terms of Service for Glorious Art Academy" 
      />
      <div className="container-custom py-24 md:py-32">
        <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-100">
          <h1 className="heading-special text-slate-900 mb-8">Terms of Service</h1>
          <div className="prose prose-slate max-w-none prose-headings:font-serif prose-headings:text-slate-900 prose-p:text-slate-600">
            <p className="text-lg">Last updated: {new Date().toLocaleDateString()}</p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">1. Acceptance of Terms</h2>
            <p>By accessing our website and enrolling in courses at Glorious Art Academy, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.</p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">2. Academy Rules and Conduct</h2>
            <p>Students are expected to maintain professional decorum at all times. Glorious Art Academy reserves the right to dismiss any student who engages in disruptive behavior, harassment, or violation of academy policies, without refund.</p>

            <h2 className="text-2xl font-bold mt-8 mb-4">3. Intellectual Property</h2>
            <p>All course materials, designs, syllabus documents, and teaching methodologies provided during the courses are the exclusive intellectual property of Glorious Art Academy. They may not be reproduced, distributed, or used for commercial teaching purposes without our explicit written consent.</p>

            <h2 className="text-2xl font-bold mt-8 mb-4">4. Certification</h2>
            <p>Certificates are awarded only upon successful completion of the course curriculum, clearing of required assessments, and full payment of all dues. The academy reserves the right to withhold certification if these criteria are not met.</p>

            <h2 className="text-2xl font-bold mt-8 mb-4">5. Limitation of Liability</h2>
            <p>Glorious Art Academy shall not be liable for any indirect, incidental, or consequential damages arising from your participation in our courses. Our liability in any circumstance is limited to the amount paid for the specific course in question.</p>

            <h2 className="text-2xl font-bold mt-8 mb-4">6. Changes to Terms</h2>
            <p>We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting to the website.</p>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
