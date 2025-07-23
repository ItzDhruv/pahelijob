
'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import JobPostingForm from './JobPostingForm';

export default function PostJobPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-xl border border-gray-200 p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Post a Job</h1>
            <p className="text-gray-600">
              Find the perfect candidate for your team. Fill out the form below to create your job posting.
            </p>
          </div>

          <JobPostingForm />
        </div>
      </main>
      <Footer />
    </div>
  );
}
