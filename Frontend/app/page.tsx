
'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from './HeroSection';
import FeaturedJobs from './FeaturedJobs';
import TopCompanies from './TopCompanies';
import StatsSection from './StatsSection';
import HowItWorks from './HowItWorks';
import Testimonials from './Testimonials';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <StatsSection />
        <FeaturedJobs />
        <TopCompanies />
        <HowItWorks />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
