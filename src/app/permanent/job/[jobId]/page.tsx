// app/permanent/[jobId]/page.tsx
import type { Metadata } from "next";
import { getPageMetadata } from "@/lib/getPageMetadata";
import JobDescription from "@/components/JobBoard/SingleJobPage/PermenantDes";
import { apiGet } from "@/lib/api";

// Define Job type
type Job = {
  job_id: number;
  job_title: string;
  profession?: { name: string };
  state?: { name: string };
  country?: { name: string };
  job_brief?: string;
};

// ✅ FIX: Await params like your working example
export async function generateMetadata({
  params,
}: {
  params: Promise<{ jobId: string }>;
}): Promise<Metadata> {
  try {
    // ✅ Await params first!
    const { jobId } = await params;

    // Fetch job data
    const res = await apiGet<{ data: Job }>(`web/jobdetails/${jobId}`);
    const job = res.data;

    // Get metadata with job-specific params
    return await getPageMetadata(
      "permanent",
      {
        id: jobId,
        title: job.job_title,
        profession: job.profession?.name,
        state: job.state?.name,
        country: job.country?.name,
      },
      `/permanent/${jobId}`,
      `https://medfuturenextjs-seo.vercel.app/permanent/${jobId}`
    );
  } catch (error) {
    // Fallback to generic metadata if fetch fails
    const { jobId } = await params;
    return await getPageMetadata("permanent", {
      id: jobId,
      title: "Job Opportunity",
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