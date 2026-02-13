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
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    // Fetch the job data to get the title
    const res = await apiGet<{ data: Job }>(`web/jobdetails/${params.jobId}`);
    const job = res.data;

    return getPageMetadata("singlepage", {
      id: params.jobId,
      title: job.job_title,
    });
  } catch (error) {
    // Fallback to generic metadata if fetch fails
    return getPageMetadata("singlepage", {
      id: params.jobId,
      title: undefined,
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