
'use client';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Software Engineer',
      company: 'TechCorp Inc.',
      image: 'https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20confident%20female%20software%20engineer%2C%20modern%20office%20background%2C%20business%20casual%20attire%2C%20smiling%20expression%2C%20natural%20lighting%2C%20professional%20corporate%20photography%20style&width=80&height=80&seq=testimonial-001&orientation=squarish',
      content: 'JobPortal helped me find my dream job in just 2 weeks. The platform is incredibly user-friendly and the job matching algorithm is spot on!',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      role: 'Product Manager',
      company: 'InnovateLabs',
      image: 'https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20confident%20male%20product%20manager%2C%20modern%20office%20background%2C%20business%20casual%20attire%2C%20friendly%20smile%2C%20natural%20lighting%2C%20professional%20corporate%20photography%20style&width=80&height=80&seq=testimonial-002&orientation=squarish',
      content: 'The quality of job opportunities on this platform is exceptional. I received multiple offers from top companies within a month.',
      rating: 5,
    },
    {
      name: 'Emily Rodriguez',
      role: 'UX Designer',
      company: 'Design Studio Pro',
      image: 'https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20confident%20female%20UX%20designer%2C%20modern%20office%20background%2C%20business%20casual%20attire%2C%20warm%20smile%2C%20natural%20lighting%2C%20professional%20corporate%20photography%20style&width=80&height=80&seq=testimonial-003&orientation=squarish',
      content: 'As a designer, I was impressed by the platform\'s clean interface and how easy it was to showcase my portfolio. Highly recommended!',
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Users Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear from professionals who have successfully found their dream careers through our platform
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <div key={i} className="w-4 h-4 flex items-center justify-center text-yellow-400">
                    <i className="ri-star-fill"></i>
                  </div>
                ))}
              </div>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role} at {testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-blue-600 text-white rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">
              Join 1M+ Happy Job Seekers
            </h3>
            <p className="text-blue-100 mb-6">
              Start your success story today and connect with your next great opportunity
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold whitespace-nowrap cursor-pointer">
              Create Free Account
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
