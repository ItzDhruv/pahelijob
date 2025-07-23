
'use client';

export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Create Your Profile',
      description: 'Build a comprehensive profile showcasing your skills, experience, and career objectives.',
      icon: 'ri-user-add-line',
    },
    {
      number: '02',
      title: 'Search & Filter Jobs',
      description: 'Use our advanced search filters to find positions that match your preferences and qualifications.',
      icon: 'ri-search-line',
    },
    {
      number: '03',
      title: 'Apply with Confidence',
      description: 'Submit applications with your tailored resume and cover letter to stand out from the competition.',
      icon: 'ri-file-text-line',
    },
    {
      number: '04',
      title: 'Track Your Progress',
      description: 'Monitor your applications and receive real-time updates on your job application status.',
      icon: 'ri-dashboard-line',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Finding your dream job is easier than ever. Follow these simple steps to get started on your career journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="relative mb-8">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className={`${step.icon} text-2xl text-blue-600`}></i>
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  {step.number}
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {step.title}
              </h3>
              
              <p className="text-gray-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-blue-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Start Your Journey?
            </h3>
            <p className="text-gray-600 mb-6">
              Join thousands of professionals who have found their perfect job through our platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold whitespace-nowrap cursor-pointer">
                Get Started Now
              </button>
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg border-2 border-blue-600 hover:bg-blue-50 transition-colors font-semibold whitespace-nowrap cursor-pointer">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
