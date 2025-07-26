
'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-blue-600" style={{ fontFamily: 'Pacifico, serif' }}>
              PaheliJob
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/jobs" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">
              Find Jobs
            </Link>
            <Link href="/companies" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">
              Companies
            </Link>
            <Link href="/post-job" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">
              Post a Job
            </Link>
            <Link href="/dashboard" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">
              Dashboard
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Link href="/login" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">
              Sign In
            </Link>
            <Link href="/register" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors cursor-pointer whitespace-nowrap">
              Sign Up
            </Link>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden w-6 h-6 flex items-center justify-center cursor-pointer"
          >
            <i className="ri-menu-line text-xl"></i>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <Link href="/jobs" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">
                Find Jobs
              </Link>
              <Link href="/companies" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">
                Companies
              </Link>
              <Link href="/post-job" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">
                Post a Job
              </Link>
              <Link href="/dashboard" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">
                Dashboard
              </Link>
              <Link href="/login" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">
                Sign In
              </Link>
              <Link href="/register" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors cursor-pointer whitespace-nowrap w-fit">
                Sign Up
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
