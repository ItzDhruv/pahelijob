
'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { useState } from 'react';

interface JobDetailProps {
  jobId: string;
}

export default function JobDetail({ jobId }: JobDetailProps) {
  const [isSaved, setIsSaved] = useState(false);

  const job = {
    id: jobId,
    title: 'Senior Software Engineer',
    company: 'TechCorp Inc.',
    location: 'San Francisco, CA',
    type: 'Full-time',
    salary: '$120,000 - $180,000',
    logo: 'https://readdy.ai/api/search-image?query=Modern%20technology%20company%20logo%20design%20with%20clean%20geometric%20shapes%2C%20professional%20corporate%20branding%2C%20blue%20and%20white%20color%20scheme%2C%20minimalist%20tech%20startup%20logo%2C%20contemporary%20business%20identity&width=80&height=80&seq=job-detail-logo-001&orientation=squarish',
    posted: '2 days ago',
    remote: true,
    description: 'We are seeking a skilled Senior Software Engineer to join our dynamic team. You will work on cutting-edge projects using modern technologies and collaborate with cross-functional teams to deliver exceptional software solutions.',
    responsibilities: [
      'Design and develop scalable web applications using React and Node.js',
      'Collaborate with product managers and designers to implement new features',
      'Mentor junior developers and participate in code reviews',
      'Optimize application performance and ensure code quality',
      'Participate in architectural decisions and technology choices',
      'Work in an agile environment with continuous deployment practices',
    ],
    requirements: [
      '5+ years of software development experience',
      'Strong proficiency in JavaScript, React, and Node.js',
      'Experience with cloud platforms (AWS, Azure, or GCP)',
      'Knowledge of database systems (SQL and NoSQL)',
      'Understanding of DevOps practices and CI/CD pipelines',
      'Experience with version control systems (Git)',
      'Strong problem-solving and communication skills',
      'Bachelor\'s degree in Computer Science or related field',
    ],
    benefits: [
      'Competitive salary with equity options',
      'Comprehensive health, dental, and vision insurance',
      'Flexible work arrangements and remote work options',
      'Professional development budget and conference attendance',
      '401(k) with company matching',
      'Unlimited PTO policy',
      'Modern office with free meals and snacks',
      'Gym membership reimbursement',
    ],
    companyInfo: {
      name: 'TechCorp Inc.',
      size: '1,000-5,000 employees',
      industry: 'Technology',
      founded: '2010',
      website: 'https://techcorp.com',
      description: 'TechCorp is a leading technology company focused on creating innovative software solutions that transform how businesses operate. We work with cutting-edge technologies and maintain a culture of continuous learning and innovation.',
    },
  };

  const relatedJobs = [
    {
      id: 2,
      title: 'Frontend Developer',
      company: 'TechCorp Inc.',
      location: 'San Francisco, CA',
      salary: '$90,000 - $130,000',
      posted: '1 day ago',
    },
    {
      id: 3,
      title: 'Backend Engineer',
      company: 'TechCorp Inc.',
      location: 'San Francisco, CA',
      salary: '$100,000 - $140,000',
      posted: '3 days ago',
    },
    {
      id: 4,
      title: 'Full Stack Developer',
      company: 'InnovateLabs',
      location: 'San Francisco, CA',
      salary: '$95,000 - $135,000',
      posted: '5 days ago',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-start">
                  <img
                    src={job.logo}
                    alt={job.company}
                    className="w-16 h-16 rounded-lg object-cover mr-4"
                  />
                  <div>
                    <h1 className="text-2xl font-bold text-gray-900 mb-2">{job.title}</h1>
                    <div className="flex items-center gap-4 text-gray-600 mb-2">
                      <span className="font-medium">{job.company}</span>
                      <span>•</span>
                      <span>{job.location}</span>
                      <span>•</span>
                      <span>{job.type}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-semibold text-green-600">{job.salary}</span>
                      {job.remote && (
                        <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                          Remote
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setIsSaved(!isSaved)}
                    className={`w-10 h-10 flex items-center justify-center rounded-full transition-colors cursor-pointer ${
                      isSaved
                        ? 'bg-red-100 text-red-600 hover:bg-red-200'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    <i className={isSaved ? 'ri-heart-fill' : 'ri-heart-line'}></i>
                  </button>
                  <span className="text-sm text-gray-500">{job.posted}</span>
                </div>
              </div>

              <div className="flex gap-3 mb-8">
                <Link href={`/jobs/${job.id}/apply`} className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold text-center whitespace-nowrap cursor-pointer">
                  Apply for this job
                </Link>
                <button className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors font-medium cursor-pointer whitespace-nowrap">
                  Share job
                </button>
              </div>

              <div className="space-y-8">
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">Job Description</h2>
                  <p className="text-gray-700 leading-relaxed">{job.description}</p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">Key Responsibilities</h2>
                  <ul className="space-y-2">
                    {job.responsibilities.map((responsibility, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-700">{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">Requirements</h2>
                  <ul className="space-y-2">
                    {job.requirements.map((requirement, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-700">{requirement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">Benefits & Perks</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {job.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center">
                        <div className="w-4 h-4 flex items-center justify-center mr-3">
                          <i className="ri-check-line text-green-600"></i>
                        </div>
                        <span className="text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Company Information</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">{job.companyInfo.name}</h4>
                  <p className="text-sm text-gray-600">{job.companyInfo.description}</p>
                </div>
                
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-500">Industry:</span>
                    <p className="font-medium">{job.companyInfo.industry}</p>
                  </div>
                  <div>
                    <span className="text-gray-500">Company Size:</span>
                    <p className="font-medium">{job.companyInfo.size}</p>
                  </div>
                  <div>
                    <span className="text-gray-500">Founded:</span>
                    <p className="font-medium">{job.companyInfo.founded}</p>
                  </div>
                  <div>
                    <span className="text-gray-500">Website:</span>
                    <a href={job.companyInfo.website} className="text-blue-600 hover:text-blue-700 font-medium cursor-pointer">
                      Visit site
                    </a>
                  </div>
                </div>
                
                <Link href={`/companies/${job.companyInfo.name}`} className="block w-full bg-gray-100 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors text-center font-medium cursor-pointer">
                  View Company Profile
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Similar Jobs</h3>
              <div className="space-y-4">
                {relatedJobs.map((relatedJob) => (
                  <div key={relatedJob.id} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                    <h4 className="font-medium text-gray-900 mb-1 hover:text-blue-600 cursor-pointer">
                      <Link href={`/jobs/${relatedJob.id}`}>{relatedJob.title}</Link>
                    </h4>
                    <p className="text-sm text-gray-600 mb-2">{relatedJob.company}</p>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">{relatedJob.location}</span>
                      <span className="text-green-600 font-medium">{relatedJob.salary}</span>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">{relatedJob.posted}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
