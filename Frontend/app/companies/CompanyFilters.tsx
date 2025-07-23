
'use client';

interface CompanyFiltersProps {
  filters: {
    industry: string;
    size: string;
    location: string;
    founded: string;
    remote: boolean;
  };
  setFilters: (filters: any) => void;
}

export default function CompanyFilters({ filters, setFilters }: CompanyFiltersProps) {
  const industries = [
    'Technology', 'Healthcare', 'Finance', 'Education', 'Marketing',
    'Manufacturing', 'Retail', 'Consulting', 'Media', 'Non-profit'
  ];

  const companySizes = [
    'Startup (1-50)', 'Small (51-200)', 'Medium (201-1000)', 
    'Large (1001-5000)', 'Enterprise (5000+)'
  ];

  const foundedRanges = [
    '2020+', '2010-2019', '2000-2009', '1990-1999', 'Before 1990'
  ];

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
          <label className="block text-sm font-medium text-gray-700 mb-2">Company Size</label>
          <select
            value={filters.size}
            onChange={(e) => updateFilter('size', e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm pr-8"
          >
            <option value="">Any Size</option>
            {companySizes.map((size) => (
              <option key={size} value={size}>{size}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Founded</label>
          <select
            value={filters.founded}
            onChange={(e) => updateFilter('founded', e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm pr-8"
          >
            <option value="">Any Time</option>
            {foundedRanges.map((range) => (
              <option key={range} value={range}>{range}</option>
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
            <span className="ml-2 text-sm text-gray-700">Remote-First Companies</span>
          </label>
        </div>

        <button
          onClick={() => setFilters({
            industry: '',
            size: '',
            location: '',
            founded: '',
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
