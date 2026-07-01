import React from 'react';
import PageWrapper from '../components/PageWrapper';
import SEO from '../components/SEO';

export default function RefundPolicy() {
  return (
    <PageWrapper>
      <SEO 
        title="Refund Policy | Glorious Art Academy" 
        description="Refund Policy for Glorious Art Academy" 
      />
      <div className="container-custom py-24 md:py-32">
        <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-100">
          <h1 className="heading-special text-slate-900 mb-8">Refund Policy</h1>
          <div className="prose prose-slate max-w-none prose-headings:font-serif prose-headings:text-slate-900 prose-p:text-slate-600">
            <p className="text-lg">Last updated: {new Date().toLocaleDateString()}</p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">1. Course Enrollment and Fees</h2>
            <p>All course fees for Aari Embroidery, Tailoring, and Makeup Artistry must be paid in full or via approved installments prior to the commencement of the course.</p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">2. Refund Eligibility</h2>
            <p>Because our courses involve reserved seating, customized materials, and dedicated trainer time, our refund policy is strictly structured:</p>
            <ul className="list-disc pl-6 mb-4 text-slate-600">
              <li><strong>Prior to Course Start:</strong> Cancellations made at least 7 days before the course start date are eligible for a partial refund, minus a registration/administrative fee.</li>
              <li><strong>After Course Start:</strong> Once a course has commenced, no refunds will be issued under any circumstances.</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">3. Course Transfers</h2>
            <p>In cases of medical emergencies or unavoidable circumstances, students may request to transfer their enrollment to a future batch. Such transfers are granted at the sole discretion of the Glorious Art Academy management and are subject to seat availability.</p>

            <h2 className="text-2xl font-bold mt-8 mb-4">4. Online Courses</h2>
            <p>For online courses, access to digital materials and recorded sessions is provided immediately upon enrollment. Therefore, online course fees are strictly non-refundable.</p>

            <h2 className="text-2xl font-bold mt-8 mb-4">5. How to Request a Refund</h2>
            <p>To request a refund (if eligible), please submit a written request to our management desk at the Chidambaram academy, outlining the reason for cancellation.</p>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
