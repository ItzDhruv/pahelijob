
'use client';

export default function StatsSection() {
  const stats = [
    { number: '50,000+', label: 'Active Jobs', icon: 'ri-briefcase-line' },
    { number: '25,000+', label: 'Companies', icon: 'ri-building-line' },
    { number: '1M+', label: 'Job Seekers', icon: 'ri-user-line' },
    { number: '95%', label: 'Success Rate', icon: 'ri-trophy-line' },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-blue-100 rounded-full mx-auto mb-4">
                <i className={`${stat.icon} text-2xl text-blue-600`}></i>
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
