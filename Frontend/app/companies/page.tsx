
'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CompanySearch from './CompanySearch';
import CompanyFilters from './CompanyFilters';
import CompanyResults from './CompanyResults';
import { useState } from 'react';

export default function CompaniesPage() {
  const [filters, setFilters] = useState({
    industry: '',
    size: '',
    location: '',
    founded: '',
    remote: false,
  });

  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <div className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Discover Companies</h1>
            <CompanySearch searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-1">
              <CompanyFilters filters={filters} setFilters={setFilters} />
            </div>
            <div className="lg:col-span-3">
              <CompanyResults searchTerm={searchTerm} filters={filters} />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
