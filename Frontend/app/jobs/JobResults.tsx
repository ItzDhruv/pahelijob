
'use client';

import Link from 'next/link';
import { useState } from 'react';

interface JobResultsProps {
  searchTerm: string;
  filters: {
    industry: string;
    location: string;
    salaryRange: string;
    jobType: string;
    experience: string;
    remote: boolean;
  };
}

export default function JobResults({ searchTerm, filters }: JobResultsProps) {
  const [savedJobs, setSavedJobs] = useState<number[]>([]);
  const [sortBy, setSortBy] = useState('newest');

  const jobs = [
    {
      id: 1,
      title: 'Senior Software Engineer',
      company: 'TechCorp Inc.',
      location: 'San Francisco, CA',
      type: 'Full-time',
      salary: '$120,000 - $180,000',
      logo: 'https://readdy.ai/api/search-image?query=Modern%20technology%20company%20logo%20design%20with%20clean%20geometric%20shapes%2C%20professional%20corporate%20branding%2C%20blue%20and%20white%20color%20scheme%2C%20minimalist%20tech%20startup%20logo%2C%20contemporary%20business%20identity&width=60&height=60&seq=job-logo-001&orientation=squarish',
      posted: '2 days ago',
      remote: true,
      description: 'We are seeking a skilled Senior Software Engineer to join our dynamic team. You will work on cutting-edge projects and collaborate with cross-functional teams.',
      requirements: ['5+ years of experience', 'React/Node.js', 'Cloud platforms', 'Team leadership'],
      benefits: ['Health insurance', 'Remote work', '401k matching', 'Professional development'],
      industry: 'Technology',
      experience: 'Senior Level',
    },
    {
      id: 2,
      title: 'Product Manager',
      company: 'InnovateLabs',
      location: 'New York, NY',
      type: 'Full-time',
      salary: '$100,000 - $140,000',
      logo: 'https://readdy.ai/api/search-image?query=Creative%20innovative%20company%20logo%20design%20with%20modern%20abstract%20symbol%2C%20professional%20corporate%20branding%2C%20green%20and%20blue%20color%20scheme%2C%20startup%20technology%20logo%2C%20contemporary%20business%20identity&width=60&height=60&seq=job-logo-002&orientation=squarish',
      posted: '1 day ago',
      remote: false,
      description: 'Join our product team to drive innovation and create user-centered products that make a difference.',
      requirements: ['3+ years PM experience', 'Agile methodology', 'Data analysis', 'User research'],
      benefits: ['Competitive salary', 'Stock options', 'Health benefits', 'Learning budget'],
      industry: 'Technology',
      experience: 'Mid Level',
    },
    {
      id: 3,
      title: 'UX/UI Designer',
      company: 'Design Studio Pro',
      location: 'Los Angeles, CA',
      type: 'Full-time',
      salary: '$80,000 - $110,000',
      logo: 'https://readdy.ai/api/search-image?query=Creative%20design%20agency%20logo%20with%20artistic%20elements%2C%20modern%20professional%20branding%2C%20purple%20and%20orange%20color%20scheme%2C%20creative%20studio%20logo%2C%20contemporary%20design%20company%20identity&width=60&height=60&seq=job-logo-003&orientation=squarish',
      posted: '3 days ago',
      remote: true,
      description: 'Create beautiful and intuitive user experiences for our diverse client portfolio.',
      requirements: ['UI/UX design portfolio', 'Figma/Sketch', 'User research', 'Prototyping'],
      benefits: ['Creative freedom', 'Flexible hours', 'Design tools', 'Conference attendance'],
      industry: 'Design',
      experience: 'Mid Level',
    },
    {
      id: 4,
      title: 'Data Scientist',
      company: 'DataFlow Analytics',
      location: 'Austin, TX',
      type: 'Full-time',
      salary: '$110,000 - $160,000',
      logo: 'https://readdy.ai/api/search-image?query=Data%20analytics%20company%20logo%20design%20with%20chart%20and%20graph%20elements%2C%20professional%20corporate%20branding%2C%20blue%20and%20gray%20color%20scheme%2C%20tech%20data%20company%20logo%2C%20modern%20business%20identity&width=60&height=60&seq=job-logo-004&orientation=squarish',
      posted: '5 days ago',
      remote: true,
      description: 'Analyze complex datasets and build machine learning models to drive business insights.',
      requirements: ['Python/R programming', 'Machine learning', 'SQL databases', 'Statistics'],
      benefits: ['Cutting-edge tech', 'Research time', 'Conference budget', 'Flexible schedule'],
      industry: 'Technology',
      experience: 'Senior Level',
    },
    {
      id: 5,
      title: 'Marketing Manager',
      company: 'GrowthMax Agency',
      location: 'Chicago, IL',
      type: 'Full-time',
      salary: '$70,000 - $95,000',
      logo: 'https://readdy.ai/api/search-image?query=Marketing%20agency%20logo%20design%20with%20growth%20arrow%20symbol%2C%20professional%20corporate%20branding%2C%20red%20and%20orange%20color%20scheme%2C%20marketing%20company%20logo%2C%20contemporary%20business%20identity&width=60&height=60&seq=job-logo-005&orientation=squarish',
      posted: '1 week ago',
      remote: false,
      description: 'Lead marketing campaigns and strategies to drive growth for our clients.',
      requirements: ['Digital marketing', 'Campaign management', 'Analytics tools', 'Team management'],
      benefits: ['Performance bonuses', 'Health insurance', 'Professional development', 'Team events'],
      industry: 'Marketing',
      experience: 'Mid Level',
    },
    {
      id: 6,
      title: 'DevOps Engineer',
      company: 'CloudTech Solutions',
      location: 'Seattle, WA',
      type: 'Full-time',
      salary: '$115,000 - $155,000',
      logo: 'https://readdy.ai/api/search-image?query=Cloud%20technology%20company%20logo%20design%20with%20cloud%20computing%20elements%2C%20professional%20corporate%20branding%2C%20blue%20and%20white%20color%20scheme%2C%20tech%20infrastructure%20logo%2C%20modern%20business%20identity&width=60&height=60&seq=job-logo-006&orientation=squarish',
      posted: '4 days ago',
      remote: true,
      description: 'Build and maintain scalable cloud infrastructure and deployment pipelines.',
      requirements: ['AWS/Azure/GCP', 'Docker/Kubernetes', 'CI/CD pipelines', 'Infrastructure as Code'],
      benefits: ['Cloud certifications', 'Remote work', 'Stock options', 'Learning budget'],
      industry: 'Technology',
      experience: 'Senior Level',
    },
  ];

  const toggleSaveJob = (jobId: number) => {
    setSavedJobs(prev => 
      prev.includes(jobId) 
        ? prev.filter(id => id !== jobId)
        : [...prev, jobId]
    );
  };

  const filteredJobs = jobs.filter(job => {
    if (searchTerm && !job.title.toLowerCase().includes(searchTerm.toLowerCase()) && 
        !job.company.toLowerCase().includes(searchTerm.toLowerCase())) {
      return false;
    }
    if (filters.industry && job.industry !== filters.industry) return false;
    if (filters.experience && job.experience !== filters.experience) return false;
    if (filters.jobType && job.type !== filters.jobType) return false;
    if (filters.remote && !job.remote) return false;
    return true;
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">
            {filteredJobs.length} Jobs Found
          </h2>
          <p className="text-gray-600">
            {searchTerm && `Results for "${searchTerm}"`}
          </p>
        </div>
        
        <div className="flex items-center gap-2">
          <label className="text-sm text-gray-600">Sort by:</label>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 pr-8"
          >
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
            <option value="salary-high">Salary: High to Low</option>
            <option value="salary-low">Salary: Low to High</option>
            <option value="company">Company A-Z</option>
          </select>
        </div>
      </div>

      <div className="space-y-4">
        {filteredJobs.map((job) => (
          <div key={job.id} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-start">
                <img
                  src={job.logo}
                  alt={job.company}
                  className="w-12 h-12 rounded-lg object-cover mr-4 flex-shrink-0"
                />
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-xl font-semibold text-gray-900 hover:text-blue-600 cursor-pointer">
                      <Link href={`/jobs/${job.id}`}>{job.title}</Link>
                    </h3>
                    {job.remote && (
                      <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                        Remote
                      </span>
                    )}
                  </div>
                  <p className="text-gray-600 mb-2">{job.company}</p>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <div className="w-4 h-4 flex items-center justify-center mr-1">
                        <i className="ri-map-pin-line"></i>
                      </div>
                      {job.location}
                    </div>
                    <div className="flex items-center">
                      <div className="w-4 h-4 flex items-center justify-center mr-1">
                        <i className="ri-time-line"></i>
                      </div>
                      {job.type}
                    </div>
                    <div className="flex items-center">
                      <div className="w-4 h-4 flex items-center justify-center mr-1">
                        <i className="ri-money-dollar-circle-line"></i>
                      </div>
                      {job.salary}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <button
                  onClick={() => toggleSaveJob(job.id)}
                  className={`w-8 h-8 flex items-center justify-center rounded-full transition-colors cursor-pointer ${
                    savedJobs.includes(job.id)
                      ? 'bg-red-100 text-red-600 hover:bg-red-200'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  <i className={savedJobs.includes(job.id) ? 'ri-heart-fill' : 'ri-heart-line'}></i>
                </button>
                <span className="text-sm text-gray-500">{job.posted}</span>
              </div>
            </div>

            <p className="text-gray-700 mb-4 line-clamp-2">
              {job.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {job.requirements.slice(0, 3).map((req, index) => (
                <span key={index} className="bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded-full">
                  {req}
                </span>
              ))}
              {job.requirements.length > 3 && (
                <span className="text-xs text-gray-500">+{job.requirements.length - 3} more</span>
              )}
            </div>

            <div className="flex items-center justify-between">
              <div className="flex flex-wrap gap-2">
                {job.benefits.slice(0, 2).map((benefit, index) => (
                  <span key={index} className="bg-green-50 text-green-700 text-xs px-2 py-1 rounded-full">
                    {benefit}
                  </span>
                ))}
              </div>
              
              <div className="flex items-center gap-2">
                <Link href={`/jobs/${job.id}`} className="text-blue-600 hover:text-blue-700 text-sm font-medium cursor-pointer">
                  View Details
                </Link>
                <Link href={`/jobs/${job.id}/apply`} className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm whitespace-nowrap cursor-pointer">
                  Apply Now
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredJobs.length === 0 && (
        <div className="text-center py-12">
          <div className="w-16 h-16 flex items-center justify-center bg-gray-100 rounded-full mx-auto mb-4">
            <i className="ri-search-line text-2xl text-gray-400"></i>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">No jobs found</h3>
          <p className="text-gray-600 mb-4">Try adjusting your search criteria or filters</p>
          <button className="text-blue-600 hover:text-blue-700 font-medium cursor-pointer">
            Clear all filters
          </button>
        </div>
      )}
    </div>
  );
}
