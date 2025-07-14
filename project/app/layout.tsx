import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from '@/components/ui/sonner';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'PaheliJob - Find Your Dream Job | Top Companies Hiring Freshers',
  description: 'Discover thousands of fresher jobs at top companies. Apply to TCS, Infosys, Wipro and 500+ companies. Start your career today with PaheliJob.',
  keywords: 'jobs, careers, freshers, TCS, Infosys, Wipro, IT jobs, software jobs',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}