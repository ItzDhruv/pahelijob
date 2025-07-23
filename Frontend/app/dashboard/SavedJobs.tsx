
'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function SavedJobs() {
  const [savedJobs, setSavedJobs] = useState([
    {
      id: 1,
      title: 'Senior Software Engineer',
      company: 'TechCorp Inc.',
      location: 'San Francisco, CA',
      type: 'Full-time',
      salary: '$120,000 - $180,000',
      logo: 'https://readdy.ai/api/search-image?query=Modern%20technology%20company%20logo%20design%20with%20clean%20geometric%20shapes%2C%20professional%20corporate%20branding%2C%20blue%20and%20white%20color%20scheme%2C%20minimalist%20tech%20startup%20logo%2C%20contemporary%20business%20identity&width=60&height=60&seq=saved-job-001&orientation=squarish',
      savedDate: '2024-01-18',
      remote: true,
      status: 'Active',
    },
    {
      id: 2,
      title: 'UX/UI Designer',
      company: 'Design Studio Pro',
      location: 'Los Angeles, CA',
      type: 'Full-time',
      salary: '$80,000 - $110,000',
      logo: 'https://readdy.ai/api/search-image?query=Creative%20design%20agency%20logo%20with%20artistic%20elements%2C%20modern%20professional%20branding%2C%20purple%20and%20orange%20color%20scheme%2C%20creative%20studio%20logo%2C%20contemporary%20design%20company%20identity&width=60&height=60&seq=saved-job-002&orientation=squarish',
      savedDate: '2024-01-16',
      remote: true,
      status: 'Active',
    },
    {
      id: 3,
      title: 'Data Scientist',
      company: 'DataFlow Analytics',
      location: 'Austin, TX',
      type: 'Full-time',
      salary: '$110,000 - $160,000',
      logo: 'https://readdy.ai/api/search-image?query=Data%20analytics%20company%20logo%20design%20with%20chart%20and%20graph%20elements%2C%20professional%20corporate%20branding%2C%20blue%20and%20gray%20color%20scheme%2C%20tech%20data%20company%20logo%2C%20modern%20business%20identity&width=60&height=60&seq=saved-job-003&orientation=squarish',
      savedDate: '2024-01-14',
      remote: true,
      status: 'Active',
    },
    {
      id: 4,
      title: 'Marketing Manager',
      company: 'GrowthMax Agency',
      location: 'Chicago, IL',
      type: 'Full-time',
      salary: '$70,000 - $95,000',
      logo: 'https://readdy.ai/api/search-image?query=Marketing%20agency%20logo%20design%20with%20growth%20arrow%20symbol%2C%20professional%20corporate%20branding%2C%20red%20and%20orange%20color%20scheme%2C%20marketing%20company%20logo%2C%20contemporary%20business%20identity&width=60&height=60&seq=saved-job-004&orientation=squarish',
      savedDate: '2024-01-12',
      remote: false,
      status: 'Expired',
    },
  ]);

  const removeSavedJob = (jobId: number) => {
    setSavedJobs(prev => prev.filter(job => job.id !== jobId));
  };

  const activeJobs = savedJobs.filter(job => job.status === 'Active');
  const expiredJobs = savedJobs.filter(job => job.status === 'Expired');

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-gray-900">Saved Jobs</h2>
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
            <span className="text-sm text-gray-600">{activeJobs.length} Active</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-gray-400 rounded-full mr-2"></div>
            <span className="text-sm text-gray-600">{expiredJobs.length} Expired</span>
          </div>
        </div>
      </div>

      {savedJobs.length === 0 ? (
        <div className="text-center py-12">
          <div className="w-16 h-16 flex items-center justify-center bg-gray-100 rounded-full mx-auto mb-4">
            <i className="ri-heart-line text-2xl text-gray-400"></i>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">No saved jobs yet</h3>
          <p className="text-gray-600 mb-4">
            Start browsing jobs and save the ones you're interested in for later
          </p>
          <Link href="/jobs" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold cursor-pointer whitespace-nowrap">
            Browse Jobs
          </Link>
        </div>
      ) : (
        <div className="space-y-4">
          {activeJobs.length > 0 && (
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">Active Jobs</h3>
              <div className="grid gap-4">
                {activeJobs.map((job) => (
                  <div key={job.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start">
                        <img
                          src={job.logo}
                          alt={job.company}
                          className="w-12 h-12 rounded-lg object-cover mr-4"
                        />
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="font-medium text-gray-900 hover:text-blue-600 cursor-pointer">
                              <Link href={`/jobs/${job.id}`}>{job.title}</Link>
                            </h3>
                            {job.remote && (
                              <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                                Remote
                              </span>
                            )}
                          </div>
                          <p className="text-sm text-gray-600 mb-2">{job.company}</p>
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
                          onClick={() => removeSavedJob(job.id)}
                          className="w-8 h-8 flex items-center justify-center bg-red-100 text-red-600 rounded-full hover:bg-red-200 transition-colors cursor-pointer"
                        >
                          <i className="ri-heart-fill"></i>
                        </button>
                        <span className="text-sm text-gray-500">
                          Saved {new Date(job.savedDate).toLocaleDateString()}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-200">
                      <div className="flex items-center gap-2">
                        <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                          {job.status}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Link href={`/jobs/${job.id}`} className="text-blue-600 hover:text-blue-700 text-sm font-medium cursor-pointer">
                          View Job
                        </Link>
                        <Link href={`/jobs/${job.id}/apply`} className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm whitespace-nowrap cursor-pointer">
                          Apply Now
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {expiredJobs.length > 0 && (
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">Expired Jobs</h3>
              <div className="grid gap-4">
                {expiredJobs.map((job) => (
                  <div key={job.id} className="border border-gray-200 rounded-lg p-4 opacity-75">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start">
                        <img
                          src={job.logo}
                          alt={job.company}
                          className="w-12 h-12 rounded-lg object-cover mr-4"
                        />
                        <div className="flex-1">
                          <h3 className="font-medium text-gray-900 mb-1">{job.title}</h3>
                          <p className="text-sm text-gray-600 mb-2">{job.company}</p>
                          <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                            <span>{job.location}</span>
                            <span>{job.type}</span>
                            <span>{job.salary}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => removeSavedJob(job.id)}
                          className="w-8 h-8 flex items-center justify-center bg-red-100 text-red-600 rounded-full hover:bg-red-200 transition-colors cursor-pointer"
                        >
                          <i className="ri-close-line"></i>
                        </button>
                        <span className="text-sm text-gray-500">
                          Saved {new Date(job.savedDate).toLocaleDateString()}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-200">
                      <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">
                        Expired
                      </span>
                      <button className="text-blue-600 hover:text-blue-700 text-sm font-medium cursor-pointer">
                        Find Similar Jobs
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
