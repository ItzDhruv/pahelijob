'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Search, Building2, Users, TrendingUp, MapPin, Clock, Star } from 'lucide-react';

const featuredCompanies = [
  { name: 'TCS', logo: '🏢', jobs: 5, rating: 4.2, location: 'Mumbai' },
  { name: 'Infosys', logo: '💼', jobs: 4, rating: 4.1, location: 'Bangalore' },
  { name: 'Wipro', logo: '🔷', jobs: 5, rating: 4.0, location: 'Pune' },
  { name: 'Accenture', logo: '🌟', jobs: 4, rating: 4.3, location: 'Hyderabad' },
  { name: 'Cognizant', logo: '⚡', jobs: 5, rating: 3.9, location: 'Chennai' },
  { name: 'HCL', logo: '🚀', jobs: 4, rating: 4.0, location: 'Noida' },
  { name: 'Tech Mahindra', logo: '🔧', jobs: 5, rating: 3.8, location: 'Mumbai' },
  { name: 'IBM', logo: '💻', jobs: 4, rating: 4.2, location: 'Bangalore' }
];

const jobCategories = [
  { name: 'Software Development', count: 1250, icon: '💻' },
  { name: 'Data Science', count: 340, icon: '📊' },
  { name: 'Web Development', count: 890, icon: '🌐' },
  { name: 'Mobile Development', count: 450, icon: '📱' },
  { name: 'DevOps', count: 320, icon: '⚙️' },
  { name: 'Quality Assurance', count: 560, icon: '🔍' }
];

const recentJobs = [
  { title: 'Full Stack Developer', company: 'TCS', location: 'Mumbai', type: 'Full-time', salary: '3-5 LPA', posted: '2 hours ago' },
  { title: 'Java Developer', company: 'Infosys', location: 'Bangalore', type: 'Full-time', salary: '3.5-6 LPA', posted: '4 hours ago' },
  { title: 'React Developer', company: 'Wipro', location: 'Pune', type: 'Full-time', salary: '3-5.5 LPA', posted: '6 hours ago' },
  { title: 'Python Developer', company: 'Accenture', location: 'Hyderabad', type: 'Full-time', salary: '4-6 LPA', posted: '1 day ago' }
];

export default function HomePage() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-green-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">PJ</span>
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                PaheliJob
              </h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-900 hover:text-blue-600 font-medium">Home</Link>
              <Link href="/companies" className="text-gray-700 hover:text-blue-600">Companies</Link>
              <Link href="/jobs" className="text-gray-700 hover:text-blue-600">Jobs</Link>
              <Link href="/about" className="text-gray-700 hover:text-blue-600">About</Link>
            </nav>
            <div className="flex items-center space-x-4">
              <Button variant="outline">Sign In</Button>
              <Button className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700">
                Post Job
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Find Your Dream Job at
              <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent"> Top Companies</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Connect with 500+ leading companies hiring freshers. Start your career journey with PaheliJob - where opportunities meet talent.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-12">
              <div className="flex flex-col sm:flex-row gap-4 p-4 bg-white rounded-xl shadow-lg border">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <Input 
                    placeholder="Search for jobs, companies, or skills..."
                    className="pl-10 border-0 focus:ring-0 text-lg"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <div className="flex-1 relative">
                  <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <Input 
                    placeholder="Location"
                    className="pl-10 border-0 focus:ring-0 text-lg"
                  />
                </div>
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 px-8">
                  Search Jobs
                </Button>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                <div className="text-gray-600">Companies</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">2500+</div>
                <div className="text-gray-600">Jobs Available</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">50K+</div>
                <div className="text-gray-600">Job Seekers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">98%</div>
                <div className="text-gray-600">Success Rate</div>
              </div>
            </div>
          </div>
        </div>

        {/* Ad Space */}
        <div className="max-w-7xl mx-auto mt-16">
          <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
            <p className="text-gray-500 text-sm">Advertisement Space - Google AdSense</p>
            <div className="text-xs text-gray-400 mt-2">728x90 Leaderboard Ad</div>
          </div>
        </div>
      </section>

      {/* Featured Companies */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Companies</h2>
            <p className="text-gray-600 text-lg">Discover opportunities at top companies actively hiring freshers</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredCompanies.map((company, index) => (
              <Link key={index} href={`/company/${company.name.toLowerCase()}`}>
                <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer group">
                  <CardHeader className="text-center">
                    <div className="text-4xl mb-2">{company.logo}</div>
                    <CardTitle className="group-hover:text-blue-600 transition-colors">{company.name}</CardTitle>
                    <CardDescription className="flex items-center justify-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {company.location}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary" className="bg-blue-50 text-blue-700">
                        {company.jobs} Jobs
                      </Badge>
                      <div className="flex items-center gap-1 text-sm text-yellow-600">
                        <Star className="h-4 w-4 fill-current" />
                        {company.rating}
                      </div>
                    </div>
                    <Button size="sm" variant="outline" className="w-full group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      View Jobs
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Link href="/companies">
              <Button size="lg" variant="outline" className="px-8">
                View All 500+ Companies
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Job Categories */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Browse by Category</h2>
            <p className="text-gray-600 text-lg">Find jobs that match your skills and interests</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobCategories.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer group">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="text-3xl">{category.icon}</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg group-hover:text-blue-600 transition-colors">{category.name}</h3>
                      <p className="text-gray-600">{category.count} jobs available</p>
                    </div>
                    <TrendingUp className="h-5 w-5 text-green-600" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Jobs */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Recent Job Openings</h2>
              <p className="text-gray-600 text-lg">Latest opportunities for freshers</p>
            </div>
            <Link href="/jobs">
              <Button variant="outline">View All Jobs</Button>
            </Link>
          </div>
          
          <div className="space-y-4">
            {recentJobs.map((job, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-semibold text-gray-900 hover:text-blue-600 transition-colors">
                          {job.title}
                        </h3>
                        <Badge className="bg-green-100 text-green-800">New</Badge>
                      </div>
                      <div className="flex items-center gap-4 text-gray-600">
                        <span className="flex items-center gap-1">
                          <Building2 className="h-4 w-4" />
                          {job.company}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {job.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {job.posted}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <div className="font-semibold text-green-600">{job.salary}</div>
                        <div className="text-sm text-gray-500">{job.type}</div>
                      </div>
                      <Link href={`/job/${job.title.toLowerCase().replace(/\s+/g, '-')}-${job.company.toLowerCase()}`}>
                        <Button className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700">
                          Apply Now
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Ad Space */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
            <p className="text-gray-500 text-sm">Advertisement Space - Google AdSense</p>
            <div className="text-xs text-gray-400 mt-2">970x250 Large Rectangle Ad</div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-green-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">PJ</span>
                </div>
                <h3 className="text-xl font-bold">PaheliJob</h3>
              </div>
              <p className="text-gray-400">
                Your gateway to amazing career opportunities at top companies.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">For Job Seekers</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/jobs" className="hover:text-white">Browse Jobs</Link></li>
                <li><Link href="/companies" className="hover:text-white">Companies</Link></li>
                <li><Link href="/career-advice" className="hover:text-white">Career Advice</Link></li>
                <li><Link href="/resume-builder" className="hover:text-white">Resume Builder</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">For Employers</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/post-job" className="hover:text-white">Post a Job</Link></li>
                <li><Link href="/employer-dashboard" className="hover:text-white">Employer Dashboard</Link></li>
                <li><Link href="/pricing" className="hover:text-white">Pricing</Link></li>
                <li><Link href="/contact" className="hover:text-white">Contact Sales</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/about" className="hover:text-white">About Us</Link></li>
                <li><Link href="/privacy" className="hover:text-white">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-white">Terms of Service</Link></li>
                <li><Link href="/contact" className="hover:text-white">Contact Us</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 PaheliJob. All rights reserved. | Connecting talent with opportunity.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}