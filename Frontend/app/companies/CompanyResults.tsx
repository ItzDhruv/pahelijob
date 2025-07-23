
'use client';

import Link from 'next/link';
import { useState } from 'react';

interface CompanyResultsProps {
  searchTerm: string;
  filters: {
    industry: string;
    size: string;
    location: string;
    founded: string;
    remote: boolean;
  };
}

export default function CompanyResults({ searchTerm, filters }: CompanyResultsProps) {
  const [followedCompanies, setFollowedCompanies] = useState<number[]>([]);

  const companies = [
    {
      id: 1,
      name: 'TechCorp Inc.',
      industry: 'Technology',
      size: 'Large (1001-5000)',
      location: 'San Francisco, CA',
      founded: '2010',
      employees: '2,500',
      openJobs: 24,
      logo: 'https://readdy.ai/api/search-image?query=Modern%20technology%20company%20logo%20design%20with%20clean%20geometric%20shapes%2C%20professional%20corporate%20branding%2C%20blue%20and%20white%20color%20scheme%2C%20minimalist%20tech%20startup%20logo%2C%20contemporary%20business%20identity&width=80&height=80&seq=company-result-001&orientation=squarish',
      description: 'Leading technology company focused on innovative software solutions and cloud infrastructure. We build products that transform how businesses operate.',
      rating: 4.5,
      benefits: ['Health Insurance', 'Remote Work', '401k', 'Stock Options'],
      remote: true,
      website: 'https://techcorp.com',
    },
    {
      id: 2,
      name: 'InnovateLabs',
      industry: 'Technology',
      size: 'Medium (201-1000)',
      location: 'New York, NY',
      founded: '2015',
      employees: '800',
      openJobs: 18,
      logo: 'https://readdy.ai/api/search-image?query=Creative%20innovative%20company%20logo%20design%20with%20modern%20abstract%20symbol%2C%20professional%20corporate%20branding%2C%20green%20and%20blue%20color%20scheme%2C%20startup%20technology%20logo%2C%20contemporary%20business%20identity&width=80&height=80&seq=company-result-002&orientation=squarish',
      description: 'Innovative software development company creating cutting-edge applications and digital experiences for forward-thinking businesses.',
      rating: 4.3,
      benefits: ['Flexible Hours', 'Learning Budget', 'Health Benefits', 'Team Events'],
      remote: false,
      website: 'https://innovatelabs.com',
    },
    {
      id: 3,
      name: 'Design Studio Pro',
      industry: 'Design',
      size: 'Small (51-200)',
      location: 'Los Angeles, CA',
      founded: '2018',
      employees: '120',
      openJobs: 12,
      logo: 'https://readdy.ai/api/search-image?query=Creative%20design%20agency%20logo%20with%20artistic%20elements%2C%20modern%20professional%20branding%2C%20purple%20and%20orange%20color%20scheme%2C%20creative%20studio%20logo%2C%20contemporary%20design%20company%20identity&width=80&height=80&seq=company-result-003&orientation=squarish',
      description: 'Premier design agency specializing in branding, UX/UI design, and creative digital solutions for brands worldwide.',
      rating: 4.7,
      benefits: ['Creative Freedom', 'Design Tools', 'Flexible Schedule', 'Conferences'],
      remote: true,
      website: 'https://designstudiopro.com',
    },
    {
      id: 4,
      name: 'DataFlow Analytics',
      industry: 'Technology',
      size: 'Medium (201-1000)',
      location: 'Austin, TX',
      founded: '2012',
      employees: '450',
      openJobs: 15,
      logo: 'https://readdy.ai/api/search-image?query=Data%20analytics%20company%20logo%20design%20with%20chart%20and%20graph%20elements%2C%20professional%20corporate%20branding%2C%20blue%20and%20gray%20color%20scheme%2C%20tech%20data%20company%20logo%2C%20modern%20business%20identity&width=80&height=80&seq=company-result-004&orientation=squarish',
      description: 'Data analytics company providing advanced insights and business intelligence solutions to help companies make data-driven decisions.',
      rating: 4.2,
      benefits: ['Research Time', 'Tech Budget', 'Health Insurance', 'Stock Options'],
      remote: true,
      website: 'https://dataflow.com',
    },
    {
      id: 5,
      name: 'GrowthMax Agency',
      industry: 'Marketing',
      size: 'Small (51-200)',
      location: 'Chicago, IL',
      founded: '2020',
      employees: '85',
      openJobs: 8,
      logo: 'https://readdy.ai/api/search-image?query=Marketing%20agency%20logo%20design%20with%20growth%20arrow%20symbol%2C%20professional%20corporate%20branding%2C%20red%20and%20orange%20color%20scheme%2C%20marketing%20company%20logo%2C%20contemporary%20business%20identity&width=80&height=80&seq=company-result-005&orientation=squarish',
      description: 'Full-service marketing agency driving growth through strategic campaigns, digital marketing, and brand development.',
      rating: 4.4,
      benefits: ['Performance Bonuses', 'Team Events', 'Learning Budget', 'Health Benefits'],
      remote: false,
      website: 'https://growthmax.com',
    },
    {
      id: 6,
      name: 'CloudTech Solutions',
      industry: 'Technology',
      size: 'Large (1001-5000)',
      location: 'Seattle, WA',
      founded: '2008',
      employees: '3,200',
      openJobs: 32,
      logo: 'https://readdy.ai/api/search-image?query=Cloud%20technology%20company%20logo%20design%20with%20cloud%20computing%20elements%2C%20professional%20corporate%20branding%2C%20blue%20and%20white%20color%20scheme%2C%20tech%20infrastructure%20logo%2C%20modern%20business%20identity&width=80&height=80&seq=company-result-006&orientation=squarish',
      description: 'Leading cloud infrastructure provider offering scalable solutions for modern businesses and enterprise applications.',
      rating: 4.6,
      benefits: ['Cloud Certifications', 'Remote Work', 'Stock Options', 'Professional Development'],
      remote: true,
      website: 'https://cloudtech.com',
    },
  ];

  const toggleFollowCompany = (companyId: number) => {
    setFollowedCompanies(prev => 
      prev.includes(companyId) 
        ? prev.filter(id => id !== companyId)
        : [...prev, companyId]
    );
  };

  const filteredCompanies = companies.filter(company => {
    if (searchTerm && !company.name.toLowerCase().includes(searchTerm.toLowerCase()) && 
        !company.description.toLowerCase().includes(searchTerm.toLowerCase())) {
      return false;
    }
    if (filters.industry && company.industry !== filters.industry) return false;
    if (filters.size && company.size !== filters.size) return false;
    if (filters.remote && !company.remote) return false;
    return true;
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">
            {filteredCompanies.length} Companies
          </h2>
          <p className="text-gray-600">
            {searchTerm && `Results for "${searchTerm}"`}
          </p>
        </div>
        
        <div className="flex items-center gap-2">
          <label className="text-sm text-gray-600">Sort by:</label>
          <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 pr-8">
            <option>Most Popular</option>
            <option>Most Jobs</option>
            <option>Recently Added</option>
            <option>Company Size</option>
            <option>Name A-Z</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredCompanies.map((company) => (
          <div key={company.id} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-start">
                <img
                  src={company.logo}
                  alt={company.name}
                  className="w-16 h-16 rounded-lg object-cover mr-4"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1 hover:text-blue-600 cursor-pointer">
                    <Link href={`/companies/${company.id}`}>{company.name}</Link>
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">{company.industry}</p>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className={`w-3 h-3 flex items-center justify-center ${i < Math.floor(company.rating) ? 'text-yellow-400' : 'text-gray-300'}`}>
                          <i className="ri-star-fill text-xs"></i>
                        </div>
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">{company.rating}</span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <button
                  onClick={() => toggleFollowCompany(company.id)}
                  className={`w-8 h-8 flex items-center justify-center rounded-full transition-colors cursor-pointer ${
                    followedCompanies.includes(company.id)
                      ? 'bg-blue-100 text-blue-600 hover:bg-blue-200'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  <i className={followedCompanies.includes(company.id) ? 'ri-heart-fill' : 'ri-heart-line'}></i>
                </button>
                {company.remote && (
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                    Remote
                  </span>
                )}
              </div>
            </div>

            <p className="text-gray-700 mb-4 line-clamp-2">
              {company.description}
            </p>

            <div className="grid grid-cols-2 gap-4 text-sm text-gray-600 mb-4">
              <div className="flex items-center">
                <div className="w-4 h-4 flex items-center justify-center mr-2">
                  <i className="ri-user-line"></i>
                </div>
                {company.employees} employees
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 flex items-center justify-center mr-2">
                  <i className="ri-map-pin-line"></i>
                </div>
                {company.location}
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 flex items-center justify-center mr-2">
                  <i className="ri-calendar-line"></i>
                </div>
                Founded {company.founded}
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 flex items-center justify-center mr-2">
                  <i className="ri-briefcase-line"></i>
                </div>
                {company.openJobs} open jobs
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {company.benefits.slice(0, 3).map((benefit, index) => (
                <span key={index} className="bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded-full">
                  {benefit}
                </span>
              ))}
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Link href={`/companies/${company.id}`} className="text-blue-600 hover:text-blue-700 text-sm font-medium cursor-pointer">
                  View Company
                </Link>
                <span className="text-gray-300">•</span>
                <a href={company.website} className="text-gray-600 hover:text-gray-800 text-sm cursor-pointer">
                  Visit Website
                </a>
              </div>
              
              <Link href={`/companies/${company.id}/jobs`} className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm whitespace-nowrap cursor-pointer">
                View Jobs ({company.openJobs})
              </Link>
            </div>
          </div>
        ))}
      </div>

      {filteredCompanies.length === 0 && (
        <div className="text-center py-12">
          <div className="w-16 h-16 flex items-center justify-center bg-gray-100 rounded-full mx-auto mb-4">
            <i className="ri-building-line text-2xl text-gray-400"></i>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">No companies found</h3>
          <p className="text-gray-600 mb-4">Try adjusting your search criteria or filters</p>
          <button className="text-blue-600 hover:text-blue-700 font-medium cursor-pointer">
            Clear all filters
          </button>
        </div>
      )}
    </div>
  );
}
