
'use client';

import Link from 'next/link';

export default function TopCompanies() {
  const companies = [
    {
      id: 1,
      name: 'TechCorp Inc.',
      industry: 'Technology',
      employees: '1,000-5,000',
      openJobs: 24,
      logo: 'https://readdy.ai/api/search-image?query=Modern%20technology%20company%20logo%20design%20with%20clean%20geometric%20shapes%2C%20professional%20corporate%20branding%2C%20blue%20and%20white%20color%20scheme%2C%20minimalist%20tech%20startup%20logo%2C%20contemporary%20business%20identity&width=120&height=120&seq=top-company-001&orientation=squarish',
      description: 'Leading technology company focused on innovative software solutions and cloud infrastructure.',
    },
    {
      id: 2,
      name: 'InnovateLabs',
      industry: 'Software Development',
      employees: '500-1,000',
      openJobs: 18,
      logo: 'https://readdy.ai/api/search-image?query=Creative%20innovative%20company%20logo%20design%20with%20modern%20abstract%20symbol%2C%20professional%20corporate%20branding%2C%20green%20and%20blue%20color%20scheme%2C%20startup%20technology%20logo%2C%20contemporary%20business%20identity&width=120&height=120&seq=top-company-002&orientation=squarish',
      description: 'Innovative software development company creating cutting-edge applications and digital experiences.',
    },
    {
      id: 3,
      name: 'Design Studio Pro',
      industry: 'Design & Creative',
      employees: '100-500',
      openJobs: 12,
      logo: 'https://readdy.ai/api/search-image?query=Creative%20design%20agency%20logo%20with%20artistic%20elements%2C%20modern%20professional%20branding%2C%20purple%20and%20orange%20color%20scheme%2C%20creative%20studio%20logo%2C%20contemporary%20design%20company%20identity&width=120&height=120&seq=top-company-003&orientation=squarish',
      description: 'Premier design agency specializing in branding, UX/UI design, and creative digital solutions.',
    },
    {
      id: 4,
      name: 'DataFlow Analytics',
      industry: 'Data & Analytics',
      employees: '200-500',
      openJobs: 15,
      logo: 'https://readdy.ai/api/search-image?query=Data%20analytics%20company%20logo%20design%20with%20chart%20and%20graph%20elements%2C%20professional%20corporate%20branding%2C%20blue%20and%20gray%20color%20scheme%2C%20tech%20data%20company%20logo%2C%20modern%20business%20identity&width=120&height=120&seq=top-company-004&orientation=squarish',
      description: 'Data analytics company providing advanced insights and business intelligence solutions.',
    },
    {
      id: 5,
      name: 'GrowthMax Agency',
      industry: 'Marketing & Advertising',
      employees: '50-100',
      openJobs: 8,
      logo: 'https://readdy.ai/api/search-image?query=Marketing%20agency%20logo%20design%20with%20growth%20arrow%20symbol%2C%20professional%20corporate%20branding%2C%20red%20and%20orange%20color%20scheme%2C%20marketing%20company%20logo%2C%20contemporary%20business%20identity&width=120&height=120&seq=top-company-005&orientation=squarish',
      description: 'Full-service marketing agency driving growth through strategic campaigns and digital marketing.',
    },
    {
      id: 6,
      name: 'CloudTech Solutions',
      industry: 'Cloud Computing',
      employees: '1,000-5,000',
      openJobs: 32,
      logo: 'https://readdy.ai/api/search-image?query=Cloud%20technology%20company%20logo%20design%20with%20cloud%20computing%20elements%2C%20professional%20corporate%20branding%2C%20blue%20and%20white%20color%20scheme%2C%20tech%20infrastructure%20logo%2C%20modern%20business%20identity&width=120&height=120&seq=top-company-006&orientation=squarish',
      description: 'Leading cloud infrastructure provider offering scalable solutions for modern businesses.',
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Top Companies Hiring
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join industry leaders and innovative startups that are shaping the future of work
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {companies.map((company) => (
            <div key={company.id} className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow cursor-pointer">
              <div className="flex items-center mb-4">
                <img
                  src={company.logo}
                  alt={company.name}
                  className="w-16 h-16 rounded-lg object-cover mr-4"
                />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{company.name}</h3>
                  <p className="text-sm text-gray-600">{company.industry}</p>
                </div>
              </div>

              <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                {company.description}
              </p>

              <div className="space-y-2 mb-4">
                <div className="flex items-center text-sm text-gray-600">
                  <div className="w-4 h-4 flex items-center justify-center mr-2">
                    <i className="ri-user-line"></i>
                  </div>
                  {company.employees} employees
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <div className="w-4 h-4 flex items-center justify-center mr-2">
                    <i className="ri-briefcase-line"></i>
                  </div>
                  {company.openJobs} open positions
                </div>
              </div>

              <div className="flex items-center justify-between">
                <Link href={`/companies/${company.id}`} className="text-blue-600 hover:text-blue-700 text-sm font-medium cursor-pointer">
                  View Company
                </Link>
                <Link href={`/companies/${company.id}/jobs`} className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm whitespace-nowrap cursor-pointer">
                  View Jobs
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/companies" className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold whitespace-nowrap cursor-pointer">
            View All Companies
          </Link>
        </div>
      </div>
    </section>
  );
}
