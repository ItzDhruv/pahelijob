"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Building2, MapPin, Star, Users, Clock, Briefcase, ArrowLeft, Globe, Calendar, DollarSign } from 'lucide-react';

export default function CompanyClient({ company }: { company: any }) {
  const [activeTab, setActiveTab] = useState('jobs');

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Header */}
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
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <div className="mb-6">
          <Link href="/companies">
            <Button variant="outline" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Companies
            </Button>
          </Link>
        </div>

        {/* Company Header */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="flex flex-col md:flex-row items-start gap-6">
            <div className="text-6xl">{company.logo}</div>
            <div className="flex-1">
              <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                <h1 className="text-4xl font-bold text-gray-900">{company.name}</h1>
                <div className="flex items-center gap-1 text-yellow-600">
                  <Star className="h-5 w-5 fill-current" />
                  <span className="font-medium">{company.rating}</span>
                  <span className="text-gray-500 text-sm ml-1">(2,345 reviews)</span>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4 mb-4 text-gray-600">
                <span className="flex items-center gap-1">
                  <Building2 className="h-4 w-4" />
                  {company.category}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  {company.location}
                </span>
                <span className="flex items-center gap-1">
                  <Users className="h-4 w-4" />
                  {company.employees} employees
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  Founded {company.founded}
                </span>
                <span className="flex items-center gap-1">
                  <Globe className="h-4 w-4" />
                  {company.website}
                </span>
              </div>
              
              <p className="text-gray-700 mb-6">{company.description}</p>
              
              <div className="flex flex-wrap gap-3">
                <Badge className="bg-blue-100 text-blue-800 px-3 py-1">
                  {company.jobs.length} Open Positions
                </Badge>
                <Badge variant="outline" className="px-3 py-1">
                  Actively Hiring
                </Badge>
                <Badge variant="outline" className="px-3 py-1">
                  Fresher Friendly
                </Badge>
              </div>
            </div>
          </div>
        </div>

        {/* Ad Space */}
        <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-4 text-center mb-8">
          <p className="text-gray-500 text-sm">Advertisement Space - Google AdSense</p>
          <div className="text-xs text-gray-400 mt-1">728x90 Leaderboard Ad</div>
        </div>

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 bg-white p-1 rounded-lg shadow-sm">
            <TabsTrigger value="jobs" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
              Jobs ({company.jobs.length})
            </TabsTrigger>
            <TabsTrigger value="about" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
              About
            </TabsTrigger>
            <TabsTrigger value="culture" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
              Culture
            </TabsTrigger>
            <TabsTrigger value="benefits" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
              Benefits
            </TabsTrigger>
          </TabsList>

          <TabsContent value="jobs" className="space-y-6">
            <div className="grid gap-6">
              {company.jobs.map((job: any, index: number) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="flex-1">
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
                            {job.experience}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {job.posted}
                          </span>
                        </CardDescription>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="text-right">
                          <div className="font-semibold text-green-600 flex items-center gap-1">
                            <DollarSign className="h-4 w-4" />
                            {job.salary}
                          </div>
                          <div className="text-sm text-gray-500">{job.type}</div>
                        </div>
                        <Link href={`/apply/${company.name.toLowerCase()}-${job.title.toLowerCase().replace(/\s+/g, '-')}`}>
                          <Button className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700">
                            Apply Now
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-4">{job.description}</p>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-medium text-gray-900 mb-2">Requirements:</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          {job.requirements.map((req: string, i: number) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="text-blue-600 mt-1">•</span>
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 mb-2">Responsibilities:</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          {job.responsibilities.map((resp: string, i: number) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="text-green-600 mt-1">•</span>
                              {resp}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="about" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>About {company.name}</CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none">
                <p className="text-gray-700 leading-relaxed">{company.about}</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="culture" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Company Culture</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">{company.culture}</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="benefits" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Employee Benefits</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {company.benefits.map((benefit: string, index: number) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Ad Space */}
        <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-8 text-center mt-8">
          <p className="text-gray-500 text-sm">Advertisement Space - Google AdSense</p>
          <div className="text-xs text-gray-400 mt-2">970x250 Large Rectangle Ad</div>
        </div>
      </div>
    </div>
  );
} 