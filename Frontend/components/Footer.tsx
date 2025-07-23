
'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4" style={{ fontFamily: 'Pacifico, serif' }}>
              JobPortal
            </h3>
            <p className="text-gray-300 mb-4">
              Connect talented professionals with amazing opportunities. Your dream job is just a click away.
            </p>
            <div className="flex space-x-4">
              <button className="w-8 h-8 flex items-center justify-center bg-blue-600 rounded-full hover:bg-blue-700 transition-colors cursor-pointer">
                <i className="ri-facebook-fill"></i>
              </button>
              <button className="w-8 h-8 flex items-center justify-center bg-blue-400 rounded-full hover:bg-blue-500 transition-colors cursor-pointer">
                <i className="ri-twitter-fill"></i>
              </button>
              <button className="w-8 h-8 flex items-center justify-center bg-blue-700 rounded-full hover:bg-blue-800 transition-colors cursor-pointer">
                <i className="ri-linkedin-fill"></i>
              </button>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">For Job Seekers</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/jobs" className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                  Browse Jobs
                </Link>
              </li>
              <li>
                <Link href="/companies" className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                  Browse Companies
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                  My Applications
                </Link>
              </li>
              <li>
                <Link href="/profile" className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                  Profile
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">For Employers</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/post-job" className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                  Post a Job
                </Link>
              </li>
              <li>
                <Link href="/company-dashboard" className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                  Manage Jobs
                </Link>
              </li>
              <li>
                <Link href="/company-profile" className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                  Company Profile
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/help" className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">
              © 2024 JobPortal. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-300 hover:text-white text-sm transition-colors cursor-pointer">
                Privacy
              </Link>
              <Link href="/terms" className="text-gray-300 hover:text-white text-sm transition-colors cursor-pointer">
                Terms
              </Link>
              <Link href="/cookies" className="text-gray-300 hover:text-white text-sm transition-colors cursor-pointer">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
