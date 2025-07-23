
'use client';

import Link from 'next/link';

export default function FeaturedJobs() {
  const featuredJobs = [
    {
      id: 1,
      title: 'Senior Software Engineer',
      company: 'TechCorp Inc.',
      location: 'San Francisco, CA',
      type: 'Full-time',
      salary: '$120,000 - $180,000',
      logo: 'https://readdy.ai/api/search-image?query=Modern%20technology%20company%20logo%20design%20with%20clean%20geometric%20shapes%2C%20professional%20corporate%20branding%2C%20blue%20and%20white%20color%20scheme%2C%20minimalist%20tech%20startup%20logo%2C%20contemporary%20business%20identity&width=80&height=80&seq=company-logo-001&orientation=squarish',
      posted: '2 days ago',
      remote: true,
    },
    {
      id: 2,
      title: 'Product Manager',
      company: 'InnovateLabs',
      location: 'New York, NY',
      type: 'Full-time',
      salary: '$100,000 - $140,000',
      logo: 'https://readdy.ai/api/search-image?query=Creative%20innovative%20company%20logo%20design%20with%20modern%20abstract%20symbol%2C%20professional%20corporate%20branding%2C%20green%20and%20blue%20color%20scheme%2C%20startup%20technology%20logo%2C%20contemporary%20business%20identity&width=80&height=80&seq=company-logo-002&orientation=squarish',
      posted: '1 day ago',
      remote: false,
    },
    {
      id: 3,
      title: 'UX/UI Designer',
      company: 'Design Studio Pro',
      location: 'Los Angeles, CA',
      type: 'Full-time',
      salary: '$80,000 - $110,000',
      logo: 'https://readdy.ai/api/search-image?query=Creative%20design%20agency%20logo%20with%20artistic%20elements%2C%20modern%20professional%20branding%2C%20purple%20and%20orange%20color%20scheme%2C%20creative%20studio%20logo%2C%20contemporary%20design%20company%20identity&width=80&height=80&seq=company-logo-003&orientation=squarish',
      posted: '3 days ago',
      remote: true,
    },
    {
      id: 4,
      title: 'Data Scientist',
      company: 'DataFlow Analytics',
      location: 'Austin, TX',
      type: 'Full-time',
      salary: '$110,000 - $160,000',
      logo: 'https://readdy.ai/api/search-image?query=Data%20analytics%20company%20logo%20design%20with%20chart%20and%20graph%20elements%2C%20professional%20corporate%20branding%2C%20blue%20and%20gray%20color%20scheme%2C%20tech%20data%20company%20logo%2C%20modern%20business%20identity&width=80&height=80&seq=company-logo-004&orientation=squarish',
      posted: '5 days ago',
      remote: true,
    },
    {
      id: 5,
      title: 'Marketing Manager',
      company: 'GrowthMax Agency',
      location: 'Chicago, IL',
      type: 'Full-time',
      salary: '$70,000 - $95,000',
      logo: 'https://readdy.ai/api/search-image?query=Marketing%20agency%20logo%20design%20with%20growth%20arrow%20symbol%2C%20professional%20corporate%20branding%2C%20red%20and%20orange%20color%20scheme%2C%20marketing%20company%20logo%2C%20contemporary%20business%20identity&width=80&height=80&seq=company-logo-005&orientation=squarish',
      posted: '1 week ago',
      remote: false,
    },
    {
      id: 6,
      title: 'DevOps Engineer',
      company: 'CloudTech Solutions',
      location: 'Seattle, WA',
      type: 'Full-time',
      salary: '$115,000 - $155,000',
      logo: 'https://readdy.ai/api/search-image?query=Cloud%20technology%20company%20logo%20design%20with%20cloud%20computing%20elements%2C%20professional%20corporate%20branding%2C%20blue%20and%20white%20color%20scheme%2C%20tech%20infrastructure%20logo%2C%20modern%20business%20identity&width=80&height=80&seq=company-logo-006&orientation=squarish',
      posted: '4 days ago',
      remote: true,
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Jobs
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover hand-picked opportunities from top companies actively hiring talented professionals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {featuredJobs.map((job) => (
            <div key={job.id} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow cursor-pointer">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center">
                  <img
                    src={job.logo}
                    alt={job.company}
                    className="w-12 h-12 rounded-lg object-cover mr-4"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{job.title}</h3>
                    <p className="text-sm text-gray-600">{job.company}</p>
                  </div>
                </div>
                {job.remote && (
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                    Remote
                  </span>
                )}
              </div>

              <div className="space-y-2 mb-4">
                <div className="flex items-center text-sm text-gray-600">
                  <div className="w-4 h-4 flex items-center justify-center mr-2">
                    <i className="ri-map-pin-line"></i>
                  </div>
                  {job.location}
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <div className="w-4 h-4 flex items-center justify-center mr-2">
                    <i className="ri-time-line"></i>
                  </div>
                  {job.type}
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <div className="w-4 h-4 flex items-center justify-center mr-2">
                    <i className="ri-money-dollar-circle-line"></i>
                  </div>
                  {job.salary}
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">{job.posted}</span>
                <Link href={`/jobs/${job.id}`} className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm whitespace-nowrap cursor-pointer">
                  Apply Now
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/jobs" className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold whitespace-nowrap cursor-pointer">
            View All Jobs
          </Link>
        </div>
      </div>
    </section>
  );
}
