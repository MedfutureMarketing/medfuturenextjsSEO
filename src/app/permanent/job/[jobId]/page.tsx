// app/permanent/[jobId]/page.tsx
import type { Metadata } from "next";
import { getPageMetadata } from "@/lib/getPageMetadata";
import { apiGet } from "@/lib/api";
import JobDescription from "@/components/JobBoard/SingleJobPage/PermenantDes";

interface Props {
  params: {
    jobId: string;
  };
}

type Job = {
  job_id: number;
  job_title: string;
  profession?: { name: string };
  engagement_type?: { name: string };
  country?: { name: string };
  state?: { name: string };
  job_brief?: string;
  medical_practise_details?: string;
  required_qualification_exp?: string;
  highlights?: Array<{ jobhighlights_id: number; name: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    // Fetch job data on the server for metadata
    const res = await apiGet<{ data: Job }>(`web/jobdetails/${params.jobId}`);
    const job = res.data;

    const path = `/permanent/job/${params.jobId}`;
    const canonicalUrl = `https://medfuture.com.au${path}`;

    return getPageMetadata(
      "permanent",
      {
        id: params.jobId,
        title: job.job_title,
      },
      path,
      canonicalUrl
    );
  } catch {
    // Fallback if fetch fails
    const path = `/permanent/job/${params.jobId}`;
    return getPageMetadata(
      "permanent",
      { id: params.jobId, title: "Healthcare Job" },
      path
    );
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