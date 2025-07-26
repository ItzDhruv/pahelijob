import JobApplication from './JobApplication';

type Props = {
  params: Promise<{
    id: string;
  }>;
};

// This function tells Next.js to pre-render static pages for these job IDs
export async function generateStaticParams() {
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' },
    { id: '4' },
    { id: '5' },
    { id: '6' },
  ];
}

// This is your dynamic route page component
export default async function JobApplicationPage({ params }: Props) {
  const { id } = await params;
  return <JobApplication jobId={id} />;
}
