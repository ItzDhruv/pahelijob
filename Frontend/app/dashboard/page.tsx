
'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ApplicationTracker from './ApplicationTracker';
import SavedJobs from './SavedJobs';
import ProfileOverview from './ProfileOverview';
import { useState } from 'react';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('applications');

  const tabs = [
    { id: 'applications', label: 'My Applications', icon: 'ri-file-list-3-line' },
    { id: 'saved', label: 'Saved Jobs', icon: 'ri-heart-line' },
    { id: 'profile', label: 'Profile', icon: 'ri-user-line' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
          <p className="text-gray-600">Track your applications and manage your job search</p>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center py-4 px-1 border-b-2 font-medium text-sm transition-colors cursor-pointer ${
                    activeTab === tab.id
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  <div className="w-5 h-5 flex items-center justify-center mr-2">
                    <i className={tab.icon}></i>
                  </div>
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          <div className="p-6">
            {activeTab === 'applications' && <ApplicationTracker />}
            {activeTab === 'saved' && <SavedJobs />}
            {activeTab === 'profile' && <ProfileOverview />}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
