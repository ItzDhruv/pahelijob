
'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import JobSearch from './JobSearch';
import JobFilters from './JobFilters';
import JobResults from './JobResults';
import { useState } from 'react';

export default function JobsPage() {
  const [filters, setFilters] = useState({
    industry: '',
    location: '',
    salaryRange: '',
    jobType: '',
    experience: '',
    remote: false,
  });

  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <div className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Find Your Perfect Job</h1>
            <JobSearch searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-1">
              <JobFilters filters={filters} setFilters={setFilters} />
            </div>
            <div className="lg:col-span-3">
              <JobResults searchTerm={searchTerm} filters={filters} />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
