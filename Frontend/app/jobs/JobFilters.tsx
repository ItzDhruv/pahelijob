
'use client';

interface FiltersProps {
  filters: {
    industry: string;
    location: string;
    salaryRange: string;
    jobType: string;
    experience: string;
    remote: boolean;
  };
  setFilters: (filters: any) => void;
}

export default function JobFilters({ filters, setFilters }: FiltersProps) {
  const industries = [
    'Technology', 'Healthcare', 'Finance', 'Education', 'Marketing',
    'Sales', 'Design', 'Engineering', 'Operations', 'Human Resources'
  ];

  const salaryRanges = [
    '$0 - $50,000', '$50,000 - $75,000', '$75,000 - $100,000',
    '$100,000 - $150,000', '$150,000 - $200,000', '$200,000+'
  ];

  const jobTypes = ['Full-time', 'Part-time', 'Contract', 'Freelance', 'Internship'];
  const experienceLevels = ['Entry Level', 'Mid Level', 'Senior Level', 'Executive'];

  const updateFilter = (key: string, value: string | boolean) => {
    setFilters({ ...filters, [key]: value });
  };

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-6">Filters</h3>
      
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Industry</label>
          <select
            value={filters.industry}
            onChange={(e) => updateFilter('industry', e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm pr-8"
          >
            <option value="">All Industries</option>
            {industries.map((industry) => (
              <option key={industry} value={industry}>{industry}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Salary Range</label>
          <select
            value={filters.salaryRange}
            onChange={(e) => updateFilter('salaryRange', e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm pr-8"
          >
            <option value="">Any Salary</option>
            {salaryRanges.map((range) => (
              <option key={range} value={range}>{range}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Job Type</label>
          <select
            value={filters.jobType}
            onChange={(e) => updateFilter('jobType', e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm pr-8"
          >
            <option value="">All Types</option>
            {jobTypes.map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Experience Level</label>
          <select
            value={filters.experience}
            onChange={(e) => updateFilter('experience', e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm pr-8"
          >
            <option value="">Any Experience</option>
            {experienceLevels.map((level) => (
              <option key={level} value={level}>{level}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={filters.remote}
              onChange={(e) => updateFilter('remote', e.target.checked)}
              className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            />
            <span className="ml-2 text-sm text-gray-700">Remote Jobs Only</span>
          </label>
        </div>

        <button
          onClick={() => setFilters({
            industry: '',
            location: '',
            salaryRange: '',
            jobType: '',
            experience: '',
            remote: false,
          })}
          className="w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors text-sm cursor-pointer"
        >
          Clear All Filters
        </button>
      </div>
    </div>
  );
}
