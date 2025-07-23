
'use client';

import Link from 'next/link';

export default function ApplicationTracker() {
  const applications = [
    {
      id: 1,
      jobTitle: 'Senior Software Engineer',
      company: 'TechCorp Inc.',
      location: 'San Francisco, CA',
      appliedDate: '2024-01-15',
      status: 'Interview Scheduled',
      statusColor: 'bg-blue-100 text-blue-800',
      nextStep: 'Technical interview on Jan 20',
      logo: 'https://readdy.ai/api/search-image?query=Modern%20technology%20company%20logo%20design%20with%20clean%20geometric%20shapes%2C%20professional%20corporate%20branding%2C%20blue%20and%20white%20color%20scheme%2C%20minimalist%20tech%20startup%20logo%2C%20contemporary%20business%20identity&width=50&height=50&seq=app-tracker-001&orientation=squarish',
    },
    {
      id: 2,
      jobTitle: 'Product Manager',
      company: 'InnovateLabs',
      location: 'New York, NY',
      appliedDate: '2024-01-12',
      status: 'Under Review',
      statusColor: 'bg-yellow-100 text-yellow-800',
      nextStep: 'Awaiting response from hiring team',
      logo: 'https://readdy.ai/api/search-image?query=Creative%20innovative%20company%20logo%20design%20with%20modern%20abstract%20symbol%2C%20professional%20corporate%20branding%2C%20green%20and%20blue%20color%20scheme%2C%20startup%20technology%20logo%2C%20contemporary%20business%20identity&width=50&height=50&seq=app-tracker-002&orientation=squarish',
    },
    {
      id: 3,
      jobTitle: 'UX/UI Designer',
      company: 'Design Studio Pro',
      location: 'Los Angeles, CA',
      appliedDate: '2024-01-10',
      status: 'Application Sent',
      statusColor: 'bg-gray-100 text-gray-800',
      nextStep: 'Application being reviewed',
      logo: 'https://readdy.ai/api/search-image?query=Creative%20design%20agency%20logo%20with%20artistic%20elements%2C%20modern%20professional%20branding%2C%20purple%20and%20orange%20color%20scheme%2C%20creative%20studio%20logo%2C%20contemporary%20design%20company%20identity&width=50&height=50&seq=app-tracker-003&orientation=squarish',
    },
    {
      id: 4,
      jobTitle: 'Frontend Developer',
      company: 'WebTech Solutions',
      location: 'Austin, TX',
      appliedDate: '2024-01-08',
      status: 'Offer Received',
      statusColor: 'bg-green-100 text-green-800',
      nextStep: 'Review offer details',
      logo: 'https://readdy.ai/api/search-image?query=Web%20development%20company%20logo%20design%20with%20modern%20tech%20elements%2C%20professional%20corporate%20branding%2C%20orange%20and%20blue%20color%20scheme%2C%20web%20agency%20logo%2C%20contemporary%20business%20identity&width=50&height=50&seq=app-tracker-004&orientation=squarish',
    },
    {
      id: 5,
      jobTitle: 'Data Scientist',
      company: 'DataFlow Analytics',
      location: 'Seattle, WA',
      appliedDate: '2024-01-05',
      status: 'Not Selected',
      statusColor: 'bg-red-100 text-red-800',
      nextStep: 'Application process completed',
      logo: 'https://readdy.ai/api/search-image?query=Data%20analytics%20company%20logo%20design%20with%20chart%20and%20graph%20elements%2C%20professional%20corporate%20branding%2C%20blue%20and%20gray%20color%20scheme%2C%20tech%20data%20company%20logo%2C%20modern%20business%20identity&width=50&height=50&seq=app-tracker-005&orientation=squarish',
    },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Interview Scheduled':
        return 'ri-calendar-line';
      case 'Under Review':
        return 'ri-time-line';
      case 'Application Sent':
        return 'ri-mail-send-line';
      case 'Offer Received':
        return 'ri-gift-line';
      case 'Not Selected':
        return 'ri-close-circle-line';
      default:
        return 'ri-file-text-line';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-gray-900">Application Status</h2>
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
            <span className="text-sm text-gray-600">5 Applications</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
            <span className="text-sm text-gray-600">1 Offer</span>
          </div>
        </div>
      </div>

      <div className="grid gap-4">
        {applications.map((app) => (
          <div key={app.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center">
                <img
                  src={app.logo}
                  alt={app.company}
                  className="w-10 h-10 rounded-lg object-cover mr-3"
                />
                <div>
                  <h3 className="font-medium text-gray-900">{app.jobTitle}</h3>
                  <p className="text-sm text-gray-600">{app.company} • {app.location}</p>
                </div>
              </div>
              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${app.statusColor}`}>
                <div className="w-3 h-3 flex items-center justify-center mr-1">
                  <i className={getStatusIcon(app.status)}></i>
                </div>
                {app.status}
              </span>
            </div>

            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center text-gray-500">
                <div className="w-4 h-4 flex items-center justify-center mr-1">
                  <i className="ri-calendar-line"></i>
                </div>
                Applied on {new Date(app.appliedDate).toLocaleDateString()}
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gray-600">{app.nextStep}</span>
                <Link href={`/jobs/${app.id}`} className="text-blue-600 hover:text-blue-700 font-medium cursor-pointer">
                  View Job
                </Link>
              </div>
            </div>

            {app.status === 'Interview Scheduled' && (
              <div className="mt-3 p-3 bg-blue-50 rounded-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-4 h-4 flex items-center justify-center mr-2 text-blue-600">
                      <i className="ri-calendar-event-line"></i>
                    </div>
                    <span className="text-sm text-blue-800">Next Interview: Jan 20, 2024 at 2:00 PM</span>
                  </div>
                  <button className="text-blue-600 hover:text-blue-700 text-sm font-medium cursor-pointer">
                    Add to Calendar
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="bg-gray-50 rounded-lg p-6 text-center">
        <div className="w-12 h-12 flex items-center justify-center bg-blue-100 rounded-full mx-auto mb-4">
          <i className="ri-search-line text-xl text-blue-600"></i>
        </div>
        <h3 className="text-lg font-medium text-gray-900 mb-2">Keep Applying!</h3>
        <p className="text-gray-600 mb-4">
          The more applications you submit, the better your chances of landing your dream job.
        </p>
        <Link href="/jobs" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium cursor-pointer whitespace-nowrap">
          Browse Jobs
        </Link>
      </div>
    </div>
  );
}
