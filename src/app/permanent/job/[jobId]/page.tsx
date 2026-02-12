import type { Metadata } from "next";
import { getPageMetadata } from "@/lib/getPageMetadata";
import JobDescription from "@/components/JobBoard/SingleJobPage/PermenantDes";

interface PageProps {
  params: Promise<{
    jobId: string;
  }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { jobId } = await params;
  // You might want to fetch job data here to generate dynamic metadata
  return getPageMetadata("permanent");
}

export default async function PermanentSingleJob({ params }: PageProps) {
  const { jobId } = await params;
  
  return (
    <div>
      <section className="min-h-screen flex flex-col">
        <JobDescription params={{ jobId }} />
      </section>
    </div>
  );
}