
'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function HeroSection() {
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('');

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Modern%20professional%20office%20environment%20with%20diverse%20people%20working%20collaboratively%20on%20laptops%20and%20computers%2C%20bright%20natural%20lighting%2C%20contemporary%20workspace%20design%2C%20glass%20windows%2C%20clean%20minimalist%20aesthetic%2C%20professional%20atmosphere%2C%20technology-focused%20workplace%2C%20corporate%20setting%20with%20modern%20furniture%20and%20equipment&width=1920&height=1080&seq=hero-bg-001&orientation=landscape')`,
        }}
      >
        <div className="absolute inset-0 bg-blue-900/70"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="w-full">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Find Your Dream Job
            <br />
            <span className="text-yellow-400">Today</span>
          </h1>
          
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Connect with top employers worldwide. Discover opportunities that match your skills and advance your career.
          </p>

          <div className="bg-white rounded-2xl p-6 shadow-2xl max-w-4xl mx-auto mb-8">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 flex items-center justify-center">
                  <i className="ri-search-line text-gray-400"></i>
                </div>
                <input
                  type="text"
                  placeholder="Job title, keywords, or company"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                />
              </div>
              
              <div className="flex-1 relative">
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 flex items-center justify-center">
                  <i className="ri-map-pin-line text-gray-400"></i>
                </div>
                <input
                  type="text"
                  placeholder="City, state, or remote"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                />
              </div>
              
              <Link href="/jobs" className="bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 transition-colors font-semibold whitespace-nowrap cursor-pointer">
                Search Jobs
              </Link>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4 text-sm text-blue-100">
            <span>Popular searches:</span>
            <button className="hover:text-white transition-colors cursor-pointer">Software Engineer</button>
            <span>•</span>
            <button className="hover:text-white transition-colors cursor-pointer">Product Manager</button>
            <span>•</span>
            <button className="hover:text-white transition-colors cursor-pointer">Data Scientist</button>
            <span>•</span>
            <button className="hover:text-white transition-colors cursor-pointer">UX Designer</button>
            <span>•</span>
            <button className="hover:text-white transition-colors cursor-pointer">Marketing Manager</button>
          </div>
        </div>
      </div>
    </section>
  );
}
