import dynamic from 'next/dynamic';
const ApplicationClient = dynamic(() => import('./ApplicationClient'), { ssr: false });

export async function generateStaticParams() {
  // ...your static params logic...
}

export default function ApplicationPage({ params }) {
  // ...fetch or prepare job data...
  return <ApplicationClient params={params} /* other props */ />;
}