import type { Metadata } from "next";
import { getPageMetadata } from "@/lib/getPageMetadata";
import JobDescription from "@/components/JobBoard/SingleJobPage/PermenantDes";

interface PageProps {
  params: Promise<{
    jobId: string;
  }> | {
    jobId: string;
  };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  // Handle both Promise and direct object
  const { jobId } = params instanceof Promise ? await params : params;
  return getPageMetadata("permanent");
}

export default async function PermanentSingleJob({ params }: PageProps) {
  // Handle both Promise and direct object
  const { jobId } = params instanceof Promise ? await params : params;
  
  return (
    <div>
      <section className="min-h-screen flex flex-col">
        <JobDescription params={{ jobId }} />
      </section>
    </div>
  );
}