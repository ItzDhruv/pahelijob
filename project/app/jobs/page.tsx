"use client";

import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, Briefcase, DollarSign } from 'lucide-react';

const staticJobs = [
  {
    title: 'Full Stack Developer (Python & React)',
    type: 'Full-time',
    experience: 'Fresher',
    salary: '4-7 LPA',
    location: 'Remote',
    description: 'Work on both backend (Python) and frontend (React) for scalable web apps.'
  },
  {
    title: 'Java Backend Engineer',
    type: 'Full-time',
    experience: '0-2 years',
    salary: '5-8 LPA',
    location: 'Bangalore',
    description: 'Build robust Java backend services for enterprise clients.'
  },
  {
    title: 'Data Scientist',
    type: 'Full-time',
    experience: 'Fresher',
    salary: '6-10 LPA',
    location: 'Hyderabad',
    description: 'Analyze data and build ML models for business insights.'
  },
  {
    title: 'DevOps Engineer',
    type: 'Full-time',
    experience: '1+ years',
    salary: '5-9 LPA',
    location: 'Pune',
    description: 'Automate CI/CD pipelines and manage cloud infrastructure.'
  },
  {
    title: 'Frontend Engineer (React)',
    type: 'Full-time',
    experience: 'Fresher',
    salary: '3.5-6 LPA',
    location: 'Delhi NCR',
    description: 'Develop modern UIs using React and TypeScript.'
  },
  {
    title: 'Android Developer',
    type: 'Full-time',
    experience: '0-1 years',
    salary: '4-7 LPA',
    location: 'Remote',
    description: 'Build Android apps for millions of users.'
  },
  {
    title: 'iOS Developer',
    type: 'Full-time',
    experience: '0-1 years',
    salary: '4-7 LPA',
    location: 'Remote',
    description: 'Develop iOS applications using Swift.'
  },
  {
    title: 'QA Automation Engineer',
    type: 'Full-time',
    experience: 'Fresher',
    salary: '3-5 LPA',
    location: 'Chennai',
    description: 'Automate test cases and ensure product quality.'
  },
  {
    title: 'UI/UX Designer',
    type: 'Full-time',
    experience: 'Fresher',
    salary: '3-6 LPA',
    location: 'Mumbai',
    description: 'Design user interfaces and experiences for web/mobile apps.'
  },
  {
    title: 'Cloud Engineer',
    type: 'Full-time',
    experience: '1+ years',
    salary: '6-11 LPA',
    location: 'Bangalore',
    description: 'Manage and optimize cloud infrastructure.'
  },
  {
    title: 'Business Analyst',
    type: 'Full-time',
    experience: 'Fresher',
    salary: '3-5 LPA',
    location: 'Gurgaon',
    description: 'Bridge business requirements and tech teams.'
  },
  {
    title: 'Product Manager',
    type: 'Full-time',
    experience: '1+ years',
    salary: '8-15 LPA',
    location: 'Remote',
    description: 'Lead product development and strategy.'
  }
];

export default function JobsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-green-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">PJ</span>
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                PaheliJob
              </h1>
            </Link>
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-700 hover:text-blue-600">Home</Link>
              <Link href="/companies" className="text-gray-700 hover:text-blue-600">Companies</Link>
              <Link href="/jobs" className="text-gray-900 hover:text-blue-600 font-medium">Jobs</Link>
              <Link href="/about" className="text-gray-700 hover:text-blue-600">About</Link>
            </nav>
          </div>
        </div>
      </header>

      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Explore Top Jobs</h1>
          <p className="text-xl opacity-90 mb-8">Apply to the best jobs for freshers and experienced professionals</p>
        </div>
      </section>

      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {staticJobs.map((job, idx) => (
            <Card key={idx} className="hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl text-gray-900 hover:text-blue-600 transition-colors">
                  {job.title}
                </CardTitle>
                <CardDescription className="flex items-center gap-4 mt-2">
                  <span className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    {job.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Briefcase className="h-4 w-4" />
                    {job.type}
                  </span>
                  <span className="flex items-center gap-1">
                    <DollarSign className="h-4 w-4" />
                    {job.salary}
                  </span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">{job.description}</p>
                <Badge variant="outline" className="mb-4">{job.experience}</Badge>
                <Link href={`/apply/pahelijob-${job.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}>
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700">
                    Apply Now
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
} 