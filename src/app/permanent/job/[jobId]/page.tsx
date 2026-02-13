// app/permanent/[jobId]/page.tsx
import type { Metadata } from "next";
import { getPageMetadata } from "@/lib/getPageMetadata";
import { apiGet } from "@/lib/api";
import JobDescription from "@/components/JobBoard/SingleJobPage/PermenantDes";

interface Props {
  params: Promise<{ jobId: string }>;
}

type Job = {
  job_id: number;
  job_title: string;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const { jobId } = await params;
    
    // Fetch job data for metadata
    const res = await apiGet<{ data: Job }>(`web/jobdetails/${jobId}`);
    const job = res.data;

    const jobPath = `/permanent/${jobId}`;
    
    return getPageMetadata(
      "permanent",
      {
        id: jobId,
        title: job?.job_title || "Healthcare Job",
      },
      jobPath,
      `https://medfuture.com.au${jobPath}`
    );
  } catch (error) {
    console.error("Error fetching job metadata:", error);
    
    // Fallback metadata
    return getPageMetadata("permanent", {
      id: "",
      title: "Healthcare Job",
    });
  }
}

export default function PermanentSingleJob() {
  return (
    <div>
      <section className="min-h-screen flex flex-col">
        <JobDescription />
      </section>
    </div>
  );
}