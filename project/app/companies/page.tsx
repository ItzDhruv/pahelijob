'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, Building2, MapPin, Star, Filter, Users } from 'lucide-react';

// Static data for 500+ companies
const companies = [
  // IT Giants
  { name: 'TCS', logoUrl: 'https://logo.clearbit.com/tcs.com', jobs: 5, rating: 4.2, location: 'Mumbai', category: 'IT Services', employees: '500K+', description: 'Leading IT services and consulting company' },
  { name: 'Infosys', logoUrl: 'https://logo.clearbit.com/infosys.com', jobs: 4, rating: 4.1, location: 'Bangalore', category: 'IT Services', employees: '250K+', description: 'Global leader in consulting and technology services' },
  { name: 'Wipro', logoUrl: 'https://logo.clearbit.com/wipro.com', jobs: 5, rating: 4.0, location: 'Pune', category: 'IT Services', employees: '200K+', description: 'Digital transformation and consulting services' },
  { name: 'Accenture', logoUrl: 'https://logo.clearbit.com/accenture.com', jobs: 4, rating: 4.3, location: 'Hyderabad', category: 'Consulting', employees: '700K+', description: 'Global professional services company' },
  { name: 'Cognizant', logoUrl: 'https://logo.clearbit.com/cognizant.com', jobs: 5, rating: 3.9, location: 'Chennai', category: 'IT Services', employees: '350K+', description: 'Multinational technology company' },
  { name: 'HCL Technologies', logoUrl: 'https://logo.clearbit.com/hcltech.com', jobs: 4, rating: 4.0, location: 'Noida', category: 'IT Services', employees: '200K+', description: 'Technology and services company' },
  { name: 'Tech Mahindra', logoUrl: 'https://logo.clearbit.com/techmahindra.com', jobs: 5, rating: 3.8, location: 'Mumbai', category: 'IT Services', employees: '150K+', description: 'Digital transformation solutions' },
  { name: 'IBM', logoUrl: 'https://logo.clearbit.com/ibm.com', jobs: 4, rating: 4.2, location: 'Bangalore', category: 'Technology', employees: '350K+', description: 'Multinational technology corporation' },
  
  // Product Companies
  { name: 'Microsoft', logoUrl: 'https://logo.clearbit.com/microsoft.com', jobs: 4, rating: 4.5, location: 'Hyderabad', category: 'Technology', employees: '220K+', description: 'Software and cloud computing company' },
  { name: 'Google', logoUrl: 'https://logo.clearbit.com/google.com', jobs: 5, rating: 4.6, location: 'Bangalore', category: 'Technology', employees: '170K+', description: 'Internet services and products' },
  { name: 'Amazon', logoUrl: 'https://logo.clearbit.com/amazon.com', jobs: 5, rating: 4.1, location: 'Mumbai', category: 'E-commerce', employees: '1.5M+', description: 'E-commerce and cloud computing' },
  { name: 'Apple', logoUrl: 'https://logo.clearbit.com/apple.com', jobs: 4, rating: 4.4, location: 'Bangalore', category: 'Technology', employees: '165K+', description: 'Consumer electronics and software' },
  { name: 'Meta', logoUrl: 'https://logo.clearbit.com/meta.com', jobs: 4, rating: 4.2, location: 'Hyderabad', category: 'Social Media', employees: '87K+', description: 'Social media and virtual reality' },
  { name: 'Netflix', logoUrl: 'https://logo.clearbit.com/netflix.com', jobs: 4, rating: 4.3, location: 'Mumbai', category: 'Entertainment', employees: '12K+', description: 'Streaming entertainment service' },
  { name: 'Adobe', logoUrl: 'https://logo.clearbit.com/adobe.com', jobs: 5, rating: 4.4, location: 'Bangalore', category: 'Software', employees: '26K+', description: 'Digital media and marketing software' },
  { name: 'Salesforce', logoUrl: 'https://logo.clearbit.com/salesforce.com', jobs: 4, rating: 4.3, location: 'Hyderabad', category: 'Cloud', employees: '80K+', description: 'Customer relationship management' },
  
  // Startups & Unicorns
  { name: 'Flipkart', logoUrl: 'https://logo.clearbit.com/flipkart.com', jobs: 5, rating: 4.0, location: 'Bangalore', category: 'E-commerce', employees: '40K+', description: 'E-commerce marketplace' },
  { name: 'Zomato', logoUrl: 'https://logo.clearbit.com/zomato.com', jobs: 4, rating: 3.9, location: 'Gurgaon', category: 'Food Tech', employees: '5K+', description: 'Food delivery platform' },
  { name: 'Swiggy', logoUrl: 'https://logo.clearbit.com/swiggy.com', jobs: 5, rating: 4.1, location: 'Bangalore', category: 'Food Tech', employees: '6K+', description: 'Food delivery and quick commerce' },
  { name: 'Paytm', logoUrl: 'https://logo.clearbit.com/paytm.com', jobs: 4, rating: 3.8, location: 'Noida', category: 'FinTech', employees: '20K+', description: 'Digital payments platform' },
  { name: 'Ola', logoUrl: 'https://logo.clearbit.com/ola.com', jobs: 5, rating: 3.7, location: 'Bangalore', category: 'Transportation', employees: '5K+', description: 'Ride-hailing platform' },
  { name: 'Uber', logoUrl: 'https://logo.clearbit.com/uber.com', jobs: 4, rating: 4.0, location: 'Hyderabad', category: 'Transportation', employees: '32K+', description: 'Global ride-sharing platform' },
  { name: 'BYJU\'S', logoUrl: 'https://logo.clearbit.com/byjus.com', jobs: 5, rating: 3.6, location: 'Bangalore', category: 'EdTech', employees: '50K+', description: 'Educational technology platform' },
  { name: 'Unacademy', logoUrl: 'https://logo.clearbit.com/unacademy.com', jobs: 4, rating: 3.8, location: 'Bangalore', category: 'EdTech', employees: '3K+', description: 'Online learning platform' },
  
  // Banking & Financial Services
  { name: 'HDFC Bank', logoUrl: 'https://logo.clearbit.com/hdfc.com', jobs: 4, rating: 4.1, location: 'Mumbai', category: 'Banking', employees: '120K+', description: 'Private sector bank' },
  { name: 'ICICI Bank', logoUrl: 'https://logo.clearbit.com/icici.com', jobs: 5, rating: 4.0, location: 'Mumbai', category: 'Banking', employees: '100K+', description: 'Multinational bank' },
  { name: 'SBI', logoUrl: 'https://logo.clearbit.com/sbi.com', jobs: 4, rating: 3.9, location: 'Mumbai', category: 'Banking', employees: '250K+', description: 'Public sector bank' },
  { name: 'Axis Bank', logoUrl: 'https://logo.clearbit.com/axis.com', jobs: 5, rating: 4.0, location: 'Mumbai', category: 'Banking', employees: '80K+', description: 'Private sector bank' },
  { name: 'Kotak Mahindra', logoUrl: 'https://logo.clearbit.com/kotak.com', jobs: 4, rating: 4.1, location: 'Mumbai', category: 'Banking', employees: '40K+', description: 'Banking and financial services' },
  { name: 'Yes Bank', logoUrl: 'https://logo.clearbit.com/yesbank.com', jobs: 4, rating: 3.7, location: 'Mumbai', category: 'Banking', employees: '25K+', description: 'Private sector bank' },
  
  // Consulting Firms
  { name: 'Deloitte', logoUrl: 'https://logo.clearbit.com/deloitte.com', jobs: 5, rating: 4.2, location: 'Mumbai', category: 'Consulting', employees: '415K+', description: 'Professional services network' },
  { name: 'PwC', logoUrl: 'https://logo.clearbit.com/pwc.com', jobs: 4, rating: 4.1, location: 'Bangalore', category: 'Consulting', employees: '328K+', description: 'Professional services firm' },
  { name: 'EY', logoUrl: 'https://logo.clearbit.com/ey.com', jobs: 5, rating: 4.0, location: 'Gurgaon', category: 'Consulting', employees: '400K+', description: 'Multinational professional services' },
  { name: 'KPMG', logoUrl: 'https://logo.clearbit.com/kpmg.com', jobs: 4, rating: 4.1, location: 'Mumbai', category: 'Consulting', employees: '270K+', description: 'Audit and advisory services' },
  { name: 'McKinsey', logoUrl: 'https://logo.clearbit.com/mckinsey.com', jobs: 4, rating: 4.5, location: 'Mumbai', category: 'Consulting', employees: '38K+', description: 'Management consulting firm' },
  { name: 'BCG', logoUrl: 'https://logo.clearbit.com/bcg.com', jobs: 4, rating: 4.4, location: 'Gurgaon', category: 'Consulting', employees: '25K+', description: 'Management consulting company' },
  
  // Manufacturing
  { name: 'Reliance', logoUrl: 'https://logo.clearbit.com/reliance.com', jobs: 5, rating: 4.0, location: 'Mumbai', category: 'Energy', employees: '200K+', description: 'Conglomerate company' },
  { name: 'L&T', logoUrl: 'https://logo.clearbit.com/lnt.com', jobs: 4, rating: 4.1, location: 'Mumbai', category: 'Engineering', employees: '150K+', description: 'Engineering and construction' },
  { name: 'Mahindra', logoUrl: 'https://logo.clearbit.com/mahindra.com', jobs: 5, rating: 3.9, location: 'Mumbai', category: 'Automotive', employees: '260K+', description: 'Multinational automotive corporation' },
  { name: 'Bajaj', logoUrl: 'https://logo.clearbit.com/bajaj.com', jobs: 4, rating: 4.0, location: 'Pune', category: 'Automotive', employees: '40K+', description: 'Automotive manufacturer' },
  { name: 'Hero MotoCorp', logoUrl: 'https://logo.clearbit.com/hero.com', jobs: 4, rating: 3.8, location: 'Gurgaon', category: 'Automotive', employees: '8K+', description: 'Motorcycle manufacturer' },
  { name: 'Maruti Suzuki', logoUrl: 'https://logo.clearbit.com/maruti.com', jobs: 5, rating: 4.1, location: 'Gurgaon', category: 'Automotive', employees: '17K+', description: 'Automobile manufacturer' },
  
  // Telecommunications
  { name: 'Jio', logoUrl: 'https://logo.clearbit.com/jio.com', jobs: 5, rating: 4.0, location: 'Mumbai', category: 'Telecom', employees: '50K+', description: 'Telecommunications company' },
  { name: 'Airtel', logoUrl: 'https://logo.clearbit.com/airtel.com', jobs: 4, rating: 3.9, location: 'Gurgaon', category: 'Telecom', employees: '25K+', description: 'Telecommunications services' },
  { name: 'Vi (Vodafone)', logoUrl: 'https://logo.clearbit.com/vi.com', jobs: 4, rating: 3.7, location: 'Mumbai', category: 'Telecom', employees: '15K+', description: 'Mobile network operator' },
  { name: 'BSNL', logoUrl: 'https://logo.clearbit.com/bsnl.com', jobs: 4, rating: 3.6, location: 'New Delhi', category: 'Telecom', employees: '150K+', description: 'Government telecom company' },
  
  // Healthcare & Pharma
  { name: 'Sun Pharma', logoUrl: 'https://logo.clearbit.com/sunpharma.com', jobs: 4, rating: 4.0, location: 'Mumbai', category: 'Pharma', employees: '50K+', description: 'Pharmaceutical company' },
  { name: 'Dr. Reddy\'s', logoUrl: 'https://logo.clearbit.com/drreddy.com', jobs: 5, rating: 4.1, location: 'Hyderabad', category: 'Pharma', employees: '25K+', description: 'Pharmaceutical company' },
  { name: 'Cipla', logoUrl: 'https://logo.clearbit.com/cipla.com', jobs: 4, rating: 4.0, location: 'Mumbai', category: 'Pharma', employees: '25K+', description: 'Pharmaceutical company' },
  { name: 'Apollo Hospitals', logoUrl: 'https://logo.clearbit.com/apollo.com', jobs: 5, rating: 4.2, location: 'Chennai', category: 'Healthcare', employees: '70K+', description: 'Healthcare provider' },
  { name: 'Fortis Healthcare', logoUrl: 'https://logo.clearbit.com/fortis.com', jobs: 4, rating: 3.9, location: 'Gurgaon', category: 'Healthcare', employees: '25K+', description: 'Healthcare services' },
  
  // Media & Entertainment
  { name: 'Zee Entertainment', logoUrl: 'https://logo.clearbit.com/zee.com', jobs: 4, rating: 3.8, location: 'Mumbai', category: 'Media', employees: '8K+', description: 'Media and entertainment' },
  { name: 'Sony Pictures', logoUrl: 'https://logo.clearbit.com/sony.com', jobs: 4, rating: 4.1, location: 'Mumbai', category: 'Entertainment', employees: '3K+', description: 'Entertainment company' },
  { name: 'Disney+ Hotstar', logoUrl: 'https://logo.clearbit.com/disney.com', jobs: 5, rating: 4.2, location: 'Mumbai', category: 'Streaming', employees: '2K+', description: 'Streaming platform' },
  { name: 'Times Group', logoUrl: 'https://logo.clearbit.com/times.com', jobs: 4, rating: 3.9, location: 'Mumbai', category: 'Media', employees: '15K+', description: 'Media conglomerate' },
  
  // Retail
  { name: 'Big Bazaar', logoUrl: 'https://logo.clearbit.com/bigbazaar.com', jobs: 5, rating: 3.7, location: 'Mumbai', category: 'Retail', employees: '50K+', description: 'Retail chain' },
  { name: 'Spencer\'s', logoUrl: 'https://logo.clearbit.com/spencers.com', jobs: 4, rating: 3.8, location: 'Kolkata', category: 'Retail', employees: '15K+', description: 'Retail stores' },
  { name: 'More Supermarkets', logoUrl: 'https://logo.clearbit.com/more.com', jobs: 4, rating: 3.6, location: 'Bangalore', category: 'Retail', employees: '20K+', description: 'Supermarket chain' },
  { name: 'Lifestyle', logoUrl: 'https://logo.clearbit.com/lifestyle.com', jobs: 5, rating: 3.9, location: 'Bangalore', category: 'Fashion', employees: '12K+', description: 'Fashion retail' },
  
  // Airlines & Travel
  { name: 'IndiGo', logoUrl: 'https://logo.clearbit.com/indigo.com', jobs: 4, rating: 4.0, location: 'Gurgaon', category: 'Aviation', employees: '25K+', description: 'Low-cost airline' },
  { name: 'Air India', logoUrl: 'https://logo.clearbit.com/airindia.com', jobs: 4, rating: 3.8, location: 'Mumbai', category: 'Aviation', employees: '15K+', description: 'National carrier airline' },
  { name: 'SpiceJet', logoUrl: 'https://logo.clearbit.com/spicejet.com', jobs: 5, rating: 3.7, location: 'Gurgaon', category: 'Aviation', employees: '12K+', description: 'Low-cost airline' },
  { name: 'MakeMyTrip', logoUrl: 'https://logo.clearbit.com/makemytrip.com', jobs: 4, rating: 3.9, location: 'Gurgaon', category: 'Travel', employees: '5K+', description: 'Online travel company' },
  
  // Food & Beverage
  { name: 'Nestle', logoUrl: 'https://logo.clearbit.com/nestle.com', jobs: 4, rating: 4.2, location: 'Gurgaon', category: 'FMCG', employees: '350K+', description: 'Food and beverage company' },
  { name: 'Unilever', logoUrl: 'https://logo.clearbit.com/unilever.com', jobs: 5, rating: 4.1, location: 'Mumbai', category: 'FMCG', employees: '190K+', description: 'Consumer goods company' },
  { name: 'ITC', logoUrl: 'https://logo.clearbit.com/itc.com', jobs: 4, rating: 4.0, location: 'Kolkata', category: 'FMCG', employees: '25K+', description: 'Diversified conglomerate' },
  { name: 'Britannia', logoUrl: 'https://logo.clearbit.com/britannia.com', jobs: 4, rating: 3.9, location: 'Kolkata', category: 'Food', employees: '25K+', description: 'Food products company' },
  
  // Real Estate
  { name: 'DLF', logoUrl: 'https://logo.clearbit.com/dlf.com', jobs: 4, rating: 3.8, location: 'Gurgaon', category: 'Real Estate', employees: '8K+', description: 'Real estate developer' },
  { name: 'Godrej Properties', logoUrl: 'https://logo.clearbit.com/godrej.com', jobs: 5, rating: 4.0, location: 'Mumbai', category: 'Real Estate', employees: '2K+', description: 'Real estate development' },
  { name: 'Prestige Group', logoUrl: 'https://logo.clearbit.com/prestige.com', jobs: 4, rating: 3.9, location: 'Bangalore', category: 'Real Estate', employees: '3K+', description: 'Real estate company' },
  
  // Education
  { name: 'Pearson', logoUrl: 'https://logo.clearbit.com/pearson.com', jobs: 4, rating: 4.0, location: 'Chennai', category: 'Education', employees: '22K+', description: 'Education company' },
  { name: 'Extramarks', logoUrl: 'https://logo.clearbit.com/extramarks.com', jobs: 5, rating: 3.8, location: 'Noida', category: 'EdTech', employees: '5K+', description: 'Educational technology' },
  { name: 'Vedantu', logoUrl: 'https://logo.clearbit.com/vedantu.com', jobs: 4, rating: 3.9, location: 'Bangalore', category: 'EdTech', employees: '6K+', description: 'Online tutoring platform' },
  
  // Logistics
  { name: 'Blue Dart', logoUrl: 'https://logo.clearbit.com/bluedart.com', jobs: 4, rating: 3.9, location: 'Mumbai', category: 'Logistics', employees: '15K+', description: 'Express logistics' },
  { name: 'DTDC', logoUrl: 'https://logo.clearbit.com/dtdc.com', jobs: 5, rating: 3.7, location: 'Bangalore', category: 'Logistics', employees: '25K+', description: 'Courier services' },
  { name: 'Delhivery', logoUrl: 'https://logo.clearbit.com/delhivery.com', jobs: 4, rating: 3.8, location: 'Gurgaon', category: 'Logistics', employees: '45K+', description: 'Supply chain services' },
  
  // Government & PSU
  { name: 'ISRO', logoUrl: 'https://logo.clearbit.com/isro.com', jobs: 4, rating: 4.5, location: 'Bangalore', category: 'Space', employees: '17K+', description: 'Space research organization' },
  { name: 'DRDO', logoUrl: 'https://logo.clearbit.com/drdo.com', jobs: 5, rating: 4.3, location: 'New Delhi', category: 'Defense', employees: '30K+', description: 'Defense research organization' },
  { name: 'ONGC', logoUrl: 'https://logo.clearbit.com/ongc.com', jobs: 4, rating: 4.1, location: 'Mumbai', category: 'Oil & Gas', employees: '34K+', description: 'Oil and gas corporation' },
  { name: 'Coal India', logoUrl: 'https://logo.clearbit.com/coalindia.com', jobs: 4, rating: 3.9, location: 'Kolkata', category: 'Mining', employees: '265K+', description: 'Coal mining company' },
  { name: 'NTPC', logoUrl: 'https://logo.clearbit.com/ntpc.com', jobs: 5, rating: 4.2, location: 'New Delhi', category: 'Power', employees: '24K+', description: 'Power generation company' },
  { name: 'BHEL', logoUrl: 'https://logo.clearbit.com/bhel.com', jobs: 4, rating: 4.0, location: 'New Delhi', category: 'Manufacturing', employees: '43K+', description: 'Heavy engineering company' },
];

// Generate more companies to reach 500+
const customNames = [
  'Zerobit Infotech',
  'Vasundhra Infotech',
  'Bits Infotech',
  'Fluttur Agency',
  'Pixelwave Solutions',
  'CodeNest Technologies',
  'Skyline Softwares',
  'Quantum Apps',
  'NextGen IT Labs',
  'BluePeak Systems',
  'Infinitum Digital',
  'Cloudify Tech',
  'BrightEdge IT',
  'NovaCore Solutions',
  'DataNest Analytics',
  'Webify Studio',
  'Appwise Agency',
  'LogicLoop IT',
  'Bitwise Digital',
  'Virtuoso Labs'
];
const additionalCompanies = Array.from({ length: 450 }, (_, i) => {
  let name;
  if (i < customNames.length) {
    name = customNames[i];
  } else {
    name = `TechCorp ${i + 1 - customNames.length}`;
  }
  return {
    name,
    logoUrl: `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}`,
    jobs: Math.floor(Math.random() * 5) + 1,
    rating: Number((3.5 + Math.random() * 1.5).toFixed(1)),
    location: ['Mumbai', 'Bangalore', 'Pune', 'Hyderabad', 'Chennai', 'Gurgaon', 'Noida', 'Kolkata'][i % 8],
    category: ['IT Services', 'Software', 'Consulting', 'Technology', 'E-commerce', 'FinTech'][i % 6],
    employees: ['1K+', '5K+', '10K+', '25K+', '50K+'][i % 5],
    description: 'Leading technology and innovation company'
  };
});

const allCompanies = [...companies, ...additionalCompanies];

// Filter out TechCorp companies for display
const displayCompanies = allCompanies.filter(c => !/^TechCorp( |$)/.test(c.name));

export default function CompaniesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');
  const [sortBy, setSortBy] = useState('rating');

  const categories = Array.from(new Set(displayCompanies.map(c => c.category)));
  const locations = Array.from(new Set(displayCompanies.map(c => c.location)));

  const filteredCompanies = displayCompanies
    .filter(company => {
      const matchesSearch = company.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          company.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || company.category === selectedCategory;
      const matchesLocation = selectedLocation === 'all' || company.location === selectedLocation;
      return matchesSearch && matchesCategory && matchesLocation;
    })
    .sort((a, b) => {
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'jobs') return b.jobs - a.jobs;
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      return 0;
    });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-green-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">PJ</span>
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                PaheliJob
              </h1>
            </Link>
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-700 hover:text-blue-600">Home</Link>
              <Link href="/companies" className="text-gray-900 hover:text-blue-600 font-medium">Companies</Link>
              <Link href="/jobs" className="text-gray-700 hover:text-blue-600">Jobs</Link>
              <Link href="/about" className="text-gray-700 hover:text-blue-600">About</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Page Header */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Explore 500+ Top Companies</h1>
          <p className="text-xl opacity-90 mb-8">Discover amazing career opportunities at leading organizations</p>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div>
                <div className="text-2xl font-bold">{displayCompanies.length}+</div>
                <div className="text-sm opacity-80">Companies</div>
              </div>
              <div>
                <div className="text-2xl font-bold">{displayCompanies.reduce((sum, c) => sum + c.jobs, 0)}+</div>
                <div className="text-sm opacity-80">Active Jobs</div>
              </div>
              <div>
                <div className="text-2xl font-bold">20+</div>
                <div className="text-sm opacity-80">Industries</div>
              </div>
              <div>
                <div className="text-2xl font-bold">50+</div>
                <div className="text-sm opacity-80">Cities</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-white border-b">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="flex-1 relative max-w-md">
              <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <Input 
                placeholder="Search companies..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  {categories.map(category => (
                    <SelectItem key={category} value={category}>{category}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Locations</SelectItem>
                  {locations.map(location => (
                    <SelectItem key={location} value={location}>{location}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="rating">Rating</SelectItem>
                  <SelectItem value="jobs">Jobs Count</SelectItem>
                  <SelectItem value="name">Name</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="mt-4 text-sm text-gray-600">
            Showing {filteredCompanies.length} companies
          </div>
        </div>
      </section>

      {/* Ad Space */}
      <section className="py-4 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
            <p className="text-gray-500 text-sm">Advertisement Space - Google AdSense</p>
            <div className="text-xs text-gray-400 mt-1">728x90 Leaderboard Ad</div>
          </div>
        </div>
      </section>

      {/* Companies Grid */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredCompanies.map((company, index) => (
              <Link key={index} href={`/company/${company.name.toLowerCase().replace(/\s+/g, '-').replace(/'/g, '')}`}>
                <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer group h-full">
                  <CardHeader className="text-center">
                    <div className="flex justify-center mb-2">
                      <img
                        src={company.logoUrl}
                        alt={company.name + ' logo'}
                        className="h-12 w-12 object-contain rounded bg-white border"
                        onError={e => { e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(company.name)}`; }}
                      />
                    </div>
                    <CardTitle className="group-hover:text-blue-600 transition-colors text-lg">
                      {company.name}
                    </CardTitle>
                    <CardDescription className="text-sm">
                      {company.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="flex items-center gap-1 text-gray-600">
                        <MapPin className="h-4 w-4" />
                        {company.location}
                      </span>
                      <div className="flex items-center gap-1 text-yellow-600">
                        <Star className="h-4 w-4 fill-current" />
                        {company.rating}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary" className="bg-blue-50 text-blue-700">
                        {company.jobs} Jobs
                      </Badge>
                      <span className="text-xs text-gray-500 flex items-center gap-1">
                        <Users className="h-3 w-3" />
                        {company.employees}
                      </span>
                    </div>
                    
                    <Badge variant="outline" className="w-full justify-center">
                      {company.category}
                    </Badge>
                    
                    <Button size="sm" className="w-full group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      View Jobs
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
          
          {filteredCompanies.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <Building2 className="h-16 w-16 mx-auto" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">No companies found</h3>
              <p className="text-gray-600">Try adjusting your search criteria</p>
            </div>
          )}
        </div>
      </section>

      {/* Ad Space */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
            <p className="text-gray-500 text-sm">Advertisement Space - Google AdSense</p>
            <div className="text-xs text-gray-400 mt-2">970x250 Large Rectangle Ad</div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Career?</h2>
          <p className="text-xl opacity-90 mb-8">
            Join thousands of freshers who found their dream jobs through PaheliJob
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="px-8">
              Browse All Jobs
            </Button>
            <Button size="lg" variant="outline" className="px-8 border-white text-white hover:bg-white hover:text-blue-600">
              Create Job Alert
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}